import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { LIGHTING } from './lighting.js'

// ===========================================================================
// 世界のスケール
//   ISS の写真は横幅でおよそ 100km のロンドン周辺を写している。
//   これを 3000 ユニットに対応させる → 30 ユニット ≒ 1km
// ===========================================================================
export const UNITS_PER_KM = 30
const IMG_W = 3000
const IMG_H = 2000 // 元画像 4128 x 2752 と同じ 3:2
const GROUND_SCALE = 6 // 地面は写真の外側まで広げる(外側は真っ黒)

// ===========================================================================
// 飛行・カメラ
// ===========================================================================
const ORBIT_RADIUS = 1100 // 都心を中心に旋回する半径
const BASE_PITCH = THREE.MathUtils.degToRad(-24) // 窓から見下ろす角度
const BANK = THREE.MathUtils.degToRad(-7) // 旋回中の機体の傾き
const LOOK_YAW = THREE.MathUtils.degToRad(18) // ドラッグで左右にのぞける最大角度
const LOOK_PITCH = THREE.MathUtils.degToRad(12) // ドラッグで上下にのぞける最大角度
const BASE_SPEED = 0.25 * UNITS_PER_KM // 対地速度 900km/h(250m/s)をユニット/秒に

const TONE_MAPPINGS = {
  none: THREE.NoToneMapping,
  aces: THREE.ACESFilmicToneMapping,
  agx: THREE.AgXToneMapping,
  neutral: THREE.NeutralToneMapping,
}

const vec3 = (rgb) => new THREE.Vector3(...rgb)

// ===========================================================================
// シェーダー
//   数値はすべて uniform(u〜)として LIGHTING から渡している
// ===========================================================================

// 霧:距離に応じて霧の色に近づける(各シェーダー共通)
const commonFog = /* GLSLの共通処理 */ `
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  float fogAmount(float dist) {
    return clamp(1.0 - exp(-pow(dist * uFogDensity, 1.6)), 0.0, 1.0);
  }
  vec3 applyFog(vec3 c, float dist) {
    return mix(c, uFogColor, fogAmount(dist));
  }
`

// 地面・雲で共通の頂点シェーダー
const planeVert = /* GLSLの頂点シェーダー */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`

// --- 地面:写真を貼り、明暗のメリハリをつける -------------------------------
const groundFrag = /* GLSLのフラグメントシェーダー */ `
  uniform sampler2D uMap;
  uniform float uScale;
  uniform float uBlackLevel;
  uniform float uLinearGain;
  uniform float uHighlightGain;
  uniform float uGain;
  uniform float uEdgeFade;
  ${commonFog}
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vec2 uv = (vUv - 0.5) * uScale + 0.5;
    vec3 c = vec3(0.0);
    if (all(greaterThan(uv, vec2(0.0))) && all(lessThan(uv, vec2(1.0)))) {
      c = texture2D(uMap, uv).rgb;
      // 写真の端をなめらかに消す
      float edge = smoothstep(0.0, uEdgeFade, uv.x) * smoothstep(1.0, 1.0 - uEdgeFade, uv.x)
                 * smoothstep(0.0, uEdgeFade, uv.y) * smoothstep(1.0, 1.0 - uEdgeFade, uv.y);
      // 暗いかすみを黒に落とし、明るい街明かりほど強める(2乗の項)
      c = max(c - uBlackLevel, 0.0);
      c = (c * uLinearGain + c * c * uHighlightGain) * uGain * edge;
    }
    c = applyFog(c, distance(vWorld, cameraPosition));
    gl_FragColor = vec4(c, 1.0);
  }
`

// --- 光の粒 ----------------------------------------------------------------
const pointsVert = /* GLSLの頂点シェーダー */ `
  attribute vec3 aColor;   // 写真の色(リニア)
  attribute float aLum;    // 写真の明るさ 0〜1
  attribute float aSeed;   // 粒ごとの乱数(またたきをずらす)
  uniform float uTime;
  uniform float uProj;         // 距離 1 のときの「1 ユニット = 何 px」
  uniform float uPixelRatio;
  uniform float uCell;         // 粒の元になった画素の間隔(ユニット)
  uniform float uBoostBase;
  uniform float uBoostByLum;
  uniform float uSizeBase;
  uniform float uSizeByLum;
  uniform float uMinPixelSize;
  uniform float uTwinkleDepth;
  uniform float uTwinkleSpeedBase;
  uniform float uTwinkleSpeedRange;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDist;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    vDist = -mv.z;

    // またたき:(1 - depth) 〜 1 の間で明るさを揺らす
    float wave = 0.5 + 0.5 * sin(uTime * (uTwinkleSpeedBase + aSeed * uTwinkleSpeedRange) + aSeed * 62.83);
    float twinkle = 1.0 - uTwinkleDepth * wave;

    // 明るさの増幅:明るい粒ほど強く
    float boost = uBoostBase + aLum * uBoostByLum;
    vColor = aColor * boost * twinkle;

    // 大きさ:明るい粒ほど大きく。最小サイズ未満は、その分暗くして光の総量を保つ
    float size = uCell * (uSizeBase + aLum * uSizeByLum) * uProj / vDist;
    vAlpha = clamp(size / uMinPixelSize, 0.0, 1.0);
    gl_PointSize = max(size, uMinPixelSize) * uPixelRatio;
  }
`

const pointsFrag = /* GLSLのフラグメントシェーダー */ `
  uniform float uSoftness;
  ${commonFog}
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDist;
  void main() {
    // 中心が明るく外へなめらかに消える丸い光
    vec2 p = gl_PointCoord - 0.5;
    float a = exp(-dot(p, p) * uSoftness) * vAlpha;
    // 加算合成なので、霧の中では色を暗くして消す
    gl_FragColor = vec4(vColor * (1.0 - fogAmount(vDist)), a);
  }
`

// --- 雲:ノイズで形を作り、街明かりで下から照らす ---------------------------
const cloudFrag = /* GLSLのフラグメントシェーダー */ `
  uniform sampler2D uMap;
  uniform float uTime;
  uniform vec2 uWind;
  uniform float uCover;
  uniform float uOpacity;
  uniform vec2 uImgSize;
  uniform float uSeed;
  uniform vec3 uBaseColor;
  uniform vec3 uCityGlow;
  uniform float uGlowBlur;
  uniform vec2 uFadeNear;
  ${commonFog}
  varying vec2 vUv;
  varying vec3 vWorld;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 6; i++) { v += a * noise(p); p = r * p * 2.03 + 11.7; a *= 0.5; }
    return v;
  }
  void main() {
    // 雲の形(風で流れ、ゆっくり形も変わる)
    vec2 p = vWorld.xz * 0.0011 + uWind * uTime + uSeed;
    float n = fbm(p + 0.6 * fbm(p * 0.7 + uTime * 0.004));
    float dens = smoothstep(uCover, uCover + 0.28, n);
    if (dens < 0.003) discard;

    // 真下の街明かり(ぼかした写真)で雲の底を照らす
    vec2 uv = vec2(vWorld.x / uImgSize.x + 0.5, 0.5 - vWorld.z / uImgSize.y);
    vec3 glow = vec3(0.0);
    if (all(greaterThan(uv, vec2(0.0))) && all(lessThan(uv, vec2(1.0)))) {
      glow = texture2D(uMap, uv, uGlowBlur).rgb;
    }
    vec3 col = uBaseColor + glow * uCityGlow;

    float dist = distance(vWorld, cameraPosition);
    float a = dens * uOpacity * smoothstep(uFadeNear.x, uFadeNear.y, dist);
    gl_FragColor = vec4(applyFog(col, dist), a);
  }
`

// --- 空:地平線の残光と星 ----------------------------------------------------
const skyVert = /* GLSLの頂点シェーダー */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // 常に一番奥に描く
  }
`

const skyFrag = /* GLSLのフラグメントシェーダー */ `
  uniform vec3 uFogColor;
  uniform float uTime;
  uniform float uHorizonLift;
  uniform vec3 uHorizonTint;
  uniform vec3 uZenith;
  uniform float uStarDensity;
  uniform float uStarBrightness;
  uniform float uStarTwinkleDepth;
  uniform float uStarTwinkleSpeedBase;
  uniform float uStarTwinkleSpeedRange;
  varying vec3 vDir;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
  void main() {
    float h = vDir.y; // 上向き成分(0 = 地平線、1 = 真上)
    vec3 horizon = uFogColor * uHorizonLift + uHorizonTint;
    vec3 c = mix(horizon, uZenith, smoothstep(-0.02, 0.35, h));
    c = mix(uFogColor, c, smoothstep(-0.08, 0.0, h)); // 地平線より下は霧の色
    // 星(地平線近くでは消す)
    float s = hash(floor(vDir * 420.0));
    float star = step(uStarDensity, s) * smoothstep(0.02, 0.2, h);
    // 星ごとに周期と位相をずらし、消えない明るさの範囲でゆっくり瞬かせる
    float seed = hash(floor(vDir * 420.0) + vec3(17.3, 43.7, 9.1));
    float wave = 0.5 + 0.5 * sin(uTime * (uStarTwinkleSpeedBase + seed * uStarTwinkleSpeedRange) + seed * 6.2831853);
    star *= 1.0 - uStarTwinkleDepth * wave;
    c += vec3(star) * uStarBrightness;
    gl_FragColor = vec4(c, 1.0);
  }
`

// ===========================================================================
// 写真から光の粒を抜き出す(読み込み時に一度だけ)
// ===========================================================================
function buildLightPoints(image, cfg) {
  const step = cfg.sampleStep
  const w = Math.floor(image.width / step)
  const h = Math.floor(image.height / step)
  const cv = document.createElement('canvas')
  cv.width = w
  cv.height = h
  const ctx = cv.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(image, 0, 0, w, h)
  const px = ctx.getImageData(0, 0, w, h).data

  // 周囲の平均的な明るさ(大きくぼかした写真)。霞や雲の明るい面を拾わないため
  const bw = Math.max(8, Math.floor(w / 24))
  const bh = Math.max(8, Math.floor(h / 24))
  const bc = document.createElement('canvas')
  bc.width = bw
  bc.height = bh
  const bctx = bc.getContext('2d', { willReadFrequently: true })
  bctx.imageSmoothingQuality = 'high'
  bctx.drawImage(image, 0, 0, bw, bh)
  const bg = bctx.getImageData(0, 0, bw, bh).data
  const bgLum = (x, y) => {
    const i = (Math.min(bh - 1, Math.floor((y / h) * bh)) * bw + Math.min(bw - 1, Math.floor((x / w) * bw))) * 4
    return (0.2126 * bg[i] + 0.7152 * bg[i + 1] + 0.0722 * bg[i + 2]) / 255
  }

  // 粒にする画素を選ぶ:十分明るく、かつ周囲より目立って明るいもの
  const candidates = []
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4
      const r = px[i] / 255, g = px[i + 1] / 255, b = px[i + 2] / 255
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
      if (lum < cfg.minLuminance) continue
      if (lum < bgLum(x, y) * cfg.contrastToBackground + cfg.backgroundOffset) continue
      candidates.push(x, y, r, g, b, lum)
    }
  }

  // 最大数を超える場合は間引く
  const count = candidates.length / 6
  const keep = Math.min(1, cfg.maxCount / Math.max(1, count))
  const pos = []
  const col = []
  const lums = []
  const seed = []
  const cell = IMG_W / w
  for (let k = 0; k < count; k++) {
    if (Math.random() > keep) continue
    const o = k * 6
    const x = candidates[o], y = candidates[o + 1]
    const r = candidates[o + 2], g = candidates[o + 3], b = candidates[o + 4], lum = candidates[o + 5]
    // 画素の中で少し位置をずらして格子感を消す
    const jx = (Math.random() - 0.5) * cell
    const jz = (Math.random() - 0.5) * cell
    pos.push(
      ((x + 0.5) / w - 0.5) * IMG_W + jx,
      cfg.heightBase + lum * lum * cfg.heightByLuminance + Math.random() * cfg.heightJitter,
      ((y + 0.5) / h - 0.5) * IMG_H + jz,
    )
    // sRGB → リニアに変換(増幅はシェーダー側で行う)
    col.push(Math.pow(r, 2.2), Math.pow(g, 2.2), Math.pow(b, 2.2))
    lums.push(lum)
    seed.push(Math.random())
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('aColor', new THREE.Float32BufferAttribute(col, 3))
  geo.setAttribute('aLum', new THREE.Float32BufferAttribute(lums, 1))
  geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seed, 1))
  return { geometry: geo, cell }
}

// ===========================================================================
// シーン本体
// ===========================================================================
export function createNightFlight(container, { imageUrl, onReady, onTelemetry, lighting = LIGHTING }) {
  const L = lighting

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000)
  // 露出とトーンマッピング(OutputPass が最後に適用する)
  renderer.toneMapping = TONE_MAPPINGS[L.output.toneMapping] ?? THREE.NoToneMapping
  renderer.toneMappingExposure = L.output.exposure
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(64, 1, 1, 60000)

  // 霧はすべてのマテリアルで同じ値を共有する
  const fogUniforms = {
    uFogColor: { value: vec3(L.fog.color) },
    uFogDensity: { value: 1 / L.fog.distance },
  }

  // --- 空 -------------------------------------------------------------------
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(30000, 48, 24),
    new THREE.ShaderMaterial({
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        ...fogUniforms,
        uTime: { value: 0 },
        uHorizonLift: { value: L.sky.horizonLift },
        uHorizonTint: { value: vec3(L.sky.horizonTint) },
        uZenith: { value: vec3(L.sky.zenith) },
        uStarDensity: { value: L.sky.starDensity },
        uStarBrightness: { value: L.sky.starBrightness },
        uStarTwinkleDepth: { value: L.sky.twinkle.depth },
        uStarTwinkleSpeedBase: { value: L.sky.twinkle.speedBase },
        uStarTwinkleSpeedRange: { value: L.sky.twinkle.speedRange },
      },
    }),
  )
  sky.renderOrder = -1
  scene.add(sky)

  // --- 状態 -----------------------------------------------------------------
  const state = {
    time: 0,
    angle: Math.PI * 0.15, // 旋回の現在角度
    altitude: 11.2 * UNITS_PER_KM, // 高度 約 11,200m
    targetAltitude: 11.2 * UNITS_PER_KM,
    speed: 1, // 速度の倍率
    look: new THREE.Vector2(), // のぞき込み(なめらかにした値)
    lookTarget: new THREE.Vector2(), // のぞき込み(ドラッグで決まる目標値)
    pointsMat: null,
    clouds: [],
  }

  // --- 写真を読み込んで地面・光の粒・雲を作る ---------------------------------
  let disposed = false
  let groundTexture = null
  new THREE.TextureLoader().load(imageUrl, (tex) => {
    // 切り替え前の画像が遅れて届いた場合は、古いシーンを再構築せず破棄する。
    if (disposed) {
      tex.dispose()
      return
    }
    groundTexture = tex
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy() // 斜めから見てもぼやけにくく
    tex.generateMipmaps = true // 雲の照り返しでぼかした写真を使うため
    tex.minFilter = THREE.LinearMipmapLinearFilter

    // 地面
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(IMG_W * GROUND_SCALE, IMG_H * GROUND_SCALE),
      new THREE.ShaderMaterial({
        vertexShader: planeVert,
        fragmentShader: groundFrag,
        uniforms: {
          ...fogUniforms,
          uMap: { value: tex },
          uScale: { value: GROUND_SCALE },
          uBlackLevel: { value: L.ground.blackLevel },
          uLinearGain: { value: L.ground.linearGain },
          uHighlightGain: { value: L.ground.highlightGain },
          uGain: { value: L.ground.gain },
          uEdgeFade: { value: L.ground.edgeFade },
        },
      }),
    )
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    // 光の粒(加算合成で地面の上に重ねる)
    const P = L.points
    const { geometry, cell } = buildLightPoints(tex.image, P)
    const pointsMat = new THREE.ShaderMaterial({
      vertexShader: pointsVert,
      fragmentShader: pointsFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        ...fogUniforms,
        uTime: { value: 0 },
        uProj: { value: 1000 }, // resize() で正しい値に更新
        uPixelRatio: { value: renderer.getPixelRatio() },
        uCell: { value: cell },
        uBoostBase: { value: P.boostBase },
        uBoostByLum: { value: P.boostByLuminance },
        uSizeBase: { value: P.sizeBase },
        uSizeByLum: { value: P.sizeByLuminance },
        uMinPixelSize: { value: P.minPixelSize },
        uSoftness: { value: P.softness },
        uTwinkleDepth: { value: P.twinkle.depth },
        uTwinkleSpeedBase: { value: P.twinkle.speedBase },
        uTwinkleSpeedRange: { value: P.twinkle.speedRange },
      },
    })
    const points = new THREE.Points(geometry, pointsMat)
    points.frustumCulled = false
    scene.add(points)
    state.pointsMat = pointsMat
    resize()

    // 雲(巡航高度より下に層を重ねる)
    const C = L.clouds
    for (const layer of C.layers) {
      const mat = new THREE.ShaderMaterial({
        vertexShader: planeVert,
        fragmentShader: cloudFrag,
        transparent: true,
        depthWrite: false,
        uniforms: {
          ...fogUniforms,
          uMap: { value: tex },
          uTime: { value: 0 },
          uWind: { value: new THREE.Vector2(...layer.wind) },
          uCover: { value: layer.cover },
          uOpacity: { value: layer.opacity },
          uImgSize: { value: new THREE.Vector2(IMG_W, IMG_H) },
          uSeed: { value: layer.seed },
          uBaseColor: { value: vec3(C.baseColor) },
          uCityGlow: { value: vec3(C.cityGlow) },
          uGlowBlur: { value: C.glowBlur },
          uFadeNear: { value: new THREE.Vector2(...C.fadeNear) },
        },
      })
      const m = new THREE.Mesh(new THREE.PlaneGeometry(24000, 24000), mat)
      m.rotation.x = -Math.PI / 2
      m.position.y = layer.y
      m.renderOrder = 2
      scene.add(m)
      state.clouds.push(mat)
    }

    onReady?.()
  })

  // --- 後処理:ブルーム → 出力(トーンマッピング・色空間変換) -------------------
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), L.bloom.strength, L.bloom.radius, L.bloom.threshold))
  composer.addPass(new OutputPass())

  // --- 画面サイズ -------------------------------------------------------------
  function resize() {
    const w = container.clientWidth
    const h = container.clientHeight
    renderer.setSize(w, h)
    composer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    if (state.pointsMat) {
      state.pointsMat.uniforms.uProj.value = h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
    }
  }
  const ro = new ResizeObserver(resize)
  ro.observe(container)
  resize()

  // --- 操作:ホイールで高度、↑↓ で速度 ----------------------------------------
  function onWheel(e) {
    e.preventDefault()
    state.targetAltitude = THREE.MathUtils.clamp(
      state.targetAltitude * Math.exp(e.deltaY * 0.0012),
      4 * UNITS_PER_KM,
      40 * UNITS_PER_KM,
    )
  }
  function onKey(e) {
    if (e.key === 'ArrowUp') state.speed = Math.min(state.speed * 1.5, 40)
    if (e.key === 'ArrowDown') state.speed = Math.max(state.speed / 1.5, 0.25)
  }
  window.addEventListener('keydown', onKey)
  window.addEventListener('wheel', onWheel, { passive: false }) // 窓枠の上でも効くように window で受ける

  // --- 毎フレームの更新 ---------------------------------------------------------
  const timer = new THREE.Timer()
  const inward = new THREE.Vector3()
  const target = new THREE.Vector3()
  let raf = 0
  let telemetryTimer = 0

  function frame() {
    raf = requestAnimationFrame(frame)
    timer.update()
    const dt = Math.min(timer.getDelta(), 0.1)
    state.time += dt
    const t = state.time

    state.altitude += (state.targetAltitude - state.altitude) * (1 - Math.exp(-dt * 1.5))
    state.look.lerp(state.lookTarget, 1 - Math.exp(-dt * 3))

    // 都心のまわりを反時計回りに旋回。右側の窓が都心を向く
    state.angle += (BASE_SPEED * state.speed * dt) / ORBIT_RADIUS
    const a = state.angle
    const turbulence = Math.sin(t * 1.7) * 0.25 + Math.sin(t * 3.1 + 1.3) * 0.12 + Math.sin(t * 0.43) * 0.6
    camera.position.set(Math.cos(a) * ORBIT_RADIUS, state.altitude + turbulence, Math.sin(a) * ORBIT_RADIUS)

    // 都心方向を基準に、のぞき込みの分だけ向きを変える
    const yaw = -state.look.x * LOOK_YAW
    const pitch = BASE_PITCH - state.look.y * LOOK_PITCH
    inward.set(-Math.cos(a), 0, -Math.sin(a)).applyAxisAngle(THREE.Object3D.DEFAULT_UP, yaw)
    target.copy(camera.position).addScaledVector(inward, Math.cos(pitch))
    target.y += Math.sin(pitch)
    camera.up.set(0, 1, 0)
    camera.lookAt(target)
    camera.rotateZ(BANK + Math.sin(t * 0.9) * 0.004 + Math.sin(t * 2.3) * 0.002) // 機体の傾き+小さな揺れ

    sky.position.copy(camera.position)
    sky.material.uniforms.uTime.value = t
    if (state.pointsMat) state.pointsMat.uniforms.uTime.value = t
    for (const c of state.clouds) c.uniforms.uTime.value = t

    composer.render()

    // 計器表示(HUD)の更新は 0.25 秒ごと
    telemetryTimer += dt
    if (telemetryTimer > 0.25 && onTelemetry) {
      telemetryTimer = 0
      onTelemetry({
        altitudeM: (state.altitude / UNITS_PER_KM) * 1000,
        speedKmh: 900 * state.speed,
        heading: ((THREE.MathUtils.radToDeg(Math.atan2(-Math.sin(a), -Math.cos(a))) % 360) + 360) % 360,
      })
    }
  }
  frame()

  return {
    // のぞき込み量(-1〜1)。ドラッグから渡される
    setLook(x, y) {
      state.lookTarget.set(x, y)
    },
    dispose() {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('wheel', onWheel)
      scene.traverse((o) => {
        o.geometry?.dispose()
        o.material?.dispose()
      })
      groundTexture?.dispose()
      composer.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    },
  }
}
