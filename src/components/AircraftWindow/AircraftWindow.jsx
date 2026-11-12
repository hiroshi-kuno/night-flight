import { useViewport } from "@/hooks/useViewport.js";
import "./AircraftWindow.scss";

// SVGの各レイヤーに使う角丸の長方形
function RRect({ r, ...props }) {
  return (
    <rect
      x={r.x}
      y={r.y}
      width={r.w}
      height={r.h}
      rx={r.rx}
      ry={r.ry}
      {...props}
    />
  );
}

/**
 * ブロック: aircraft-window
 *   WebGLの景色に、機内の壁・樹脂製の窓枠・ガラスの表現を重ねる。
 *   形状は画面サイズと頭の位置に応じてここで計算し、
 *   装飾用の色はSVGのグラデーションで定義する。
 *
 * @param {{x:number,y:number}} head 平滑化した頭の位置のずれ（-1〜1）
 */
export default function AircraftWindow({ head = { x: 0, y: 0 } }) {
  const { w: vw, h: vh } = useViewport();

  // 窓の開口部（ガラス）
  const h = Math.min(vh * 0.74, vw * 1.05);
  const w = h * 0.7;
  const cx = vw / 2 - head.x * vw * 0.012;
  const cy = vh / 2 - head.y * vh * 0.012;
  const glass = {
    x: cx - w / 2,
    y: cy - h / 2,
    w,
    h,
    rx: w * 0.44,
    ry: h * 0.3,
  };
  const bez = h * 0.02;
  const bezel = {
    x: glass.x - bez,
    y: glass.y - bez,
    w: w + bez * 2,
    h: h + bez * 2,
    rx: glass.rx + bez,
    ry: glass.ry + bez,
  };
  // 機内側のガラス: 少し大きくし、視差が出るよう位置をずらす
  const pane = {
    x: glass.x - w * 0.012 - head.x * 4,
    y: glass.y - h * 0.01 - head.y * 4,
    w: w * 1.024,
    h: h * 1.02,
    rx: glass.rx * 1.02,
    ry: glass.ry * 1.02,
  };

  return (
    <svg
      className="aircraft-window"
      width={vw}
      height={vh}
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aw-wall" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0"
            className="aircraft-window__stop aircraft-window__stop--wall-light"
          />
          <stop
            offset="0.5"
            className="aircraft-window__stop aircraft-window__stop--wall-mid"
          />
          <stop
            offset="1"
            className="aircraft-window__stop aircraft-window__stop--wall-dark"
          />
        </linearGradient>
        <radialGradient id="aw-wall-light" cx="0.5" cy="0.15" r="0.9">
          <stop
            offset="0"
            className="aircraft-window__stop aircraft-window__stop--cabin-light"
          />
          <stop
            offset="1"
            className="aircraft-window__stop aircraft-window__stop--transparent"
          />
        </radialGradient>
        <linearGradient id="aw-bezel" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0"
            className="aircraft-window__stop aircraft-window__stop--bezel-light"
          />
          <stop
            offset="0.45"
            className="aircraft-window__stop aircraft-window__stop--bezel-mid"
          />
          <stop
            offset="1"
            className="aircraft-window__stop aircraft-window__stop--bezel-dark"
          />
        </linearGradient>
        <linearGradient id="aw-reflect" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0"
            className="aircraft-window__stop aircraft-window__stop--reflect-cool"
          />
          <stop
            offset="0.35"
            className="aircraft-window__stop aircraft-window__stop--transparent"
          />
          <stop
            offset="0.7"
            className="aircraft-window__stop aircraft-window__stop--transparent"
          />
          <stop
            offset="1"
            className="aircraft-window__stop aircraft-window__stop--reflect-warm"
          />
        </linearGradient>

        <mask id="aw-wall-mask">
          <rect width={vw} height={vh} fill="#fff" />
          <RRect r={bezel} fill="#000" />
        </mask>
        <mask id="aw-bezel-mask">
          <RRect r={bezel} fill="#fff" />
          <RRect r={glass} fill="#000" />
        </mask>
        <clipPath id="aw-glass-clip">
          <RRect r={glass} />
        </clipPath>

        <filter id="aw-blur-lg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={h * 0.03} />
        </filter>
        <filter id="aw-blur-sm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={h * 0.006} />
        </filter>
      </defs>

      <g className="aircraft-window__glass" clipPath="url(#aw-glass-clip)">
        <RRect
          r={glass}
          className="aircraft-window__depth"
          strokeWidth={h * 0.07}
          filter="url(#aw-blur-lg)"
        />
        <RRect
          r={pane}
          className="aircraft-window__pane"
          filter="url(#aw-blur-sm)"
        />
        <RRect r={glass} className="aircraft-window__reflection" />
        <circle
          className="aircraft-window__breather-hole"
          cx={cx}
          cy={glass.y + h * 0.9}
          r={Math.max(1.5, h * 0.0035)}
        />
      </g>

      <g className="aircraft-window__bezel" mask="url(#aw-bezel-mask)">
        <RRect r={bezel} className="aircraft-window__bezel-surface" />
        <RRect
          r={glass}
          className="aircraft-window__bezel-shadow"
          strokeWidth={bez * 0.5}
          filter="url(#aw-blur-sm)"
        />
      </g>

      <g className="aircraft-window__wall" mask="url(#aw-wall-mask)">
        <rect
          width={vw}
          height={vh}
          className="aircraft-window__wall-surface"
        />
        <rect width={vw} height={vh} className="aircraft-window__wall-light" />
        <RRect
          r={bezel}
          className="aircraft-window__wall-shadow"
          strokeWidth={bez * 0.8}
          filter="url(#aw-blur-lg)"
        />
      </g>
    </svg>
  );
}
