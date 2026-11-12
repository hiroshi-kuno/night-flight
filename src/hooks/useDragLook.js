import { useEffect, useRef, useState } from 'react'

const clamp = (v) => Math.max(-1, Math.min(1, v))

/**
 * ドラッグで視線を動かす。
 *   `ref` 内をドラッグすると頭の位置が変わり、離した位置で視線を維持する。
 *   ダブルクリックで中央に戻す。
 *
 *   景色をつかむ操作に合わせ、右にドラッグすると景色も右に動く（視線は左を向く）。
 *   上下のドラッグも同じ規則に従う。
 *
 * @returns {{ look: {x:number,y:number}, dragging: boolean }}
 *   look は平滑化した -1〜1 の視線位置、dragging はドラッグ中かどうかを表す。
 *   `onChange(x, y)` には平滑化前の目標値を渡す。
 */
export function useDragLook(ref, { sensitivity = 2.2, smoothing = 0.08, onChange } = {}) {
  const [look, setLook] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let tx = 0, ty = 0 // 目標値
    let x = 0, y = 0 // 平滑化した値
    let drag = null
    let raf = 0

    const setTarget = (nx, ny) => {
      tx = clamp(nx)
      ty = clamp(ny)
      onChangeRef.current?.(tx, ty)
    }

    const onDown = (e) => {
      if (e.button !== 0) return
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY }
      el.setPointerCapture(e.pointerId)
      setDragging(true)
    }
    const onMove = (e) => {
      if (!drag || e.pointerId !== drag.id) return
      const dx = ((e.clientX - drag.x) / window.innerWidth) * sensitivity
      const dy = ((e.clientY - drag.y) / window.innerHeight) * sensitivity
      drag.x = e.clientX
      drag.y = e.clientY
      setTarget(tx - dx, ty - dy)
    }
    const onUp = (e) => {
      if (!drag || e.pointerId !== drag.id) return
      drag = null
      setDragging(false)
    }
    const onDblClick = () => setTarget(0, 0)

    const tick = () => {
      const nx = x + (tx - x) * smoothing
      const ny = y + (ty - y) * smoothing
      // 視線位置が実際に変わる間だけ再描画する
      if (Math.abs(nx - x) > 1e-4 || Math.abs(ny - y) > 1e-4) {
        x = nx
        y = ny
        setLook({ x, y })
      }
      raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    el.addEventListener('dblclick', onDblClick)
    tick()

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
      el.removeEventListener('dblclick', onDblClick)
    }
  }, [ref, sensitivity, smoothing])

  return { look, dragging }
}
