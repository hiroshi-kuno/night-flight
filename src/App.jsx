import { useEffect, useRef, useState } from 'react'
import { createNightFlight } from '@/scene/nightFlight.js'
import { useDragLook } from '@/hooks/useDragLook.js'
import AircraftWindow from '@/components/AircraftWindow/AircraftWindow.jsx'
import Loader from '@/components/Loader/Loader.jsx'
import { HudBottom, HudTop } from '@/components/Hud/Hud.jsx'
import './App.scss'

const IMAGE_URL = '/land/ISS073-E-659216.jpeg'

/**
 * ブロック: flight
 *   要素: flight__viewport（WebGLキャンバスの配置先）
 *   修飾子: flight--dragging（視点をドラッグしている間）
 */
export default function App() {
  const rootRef = useRef(null)
  const viewportRef = useRef(null)
  const flightRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [telemetry, setTelemetry] = useState(null)

  const { look, dragging } = useDragLook(rootRef, {
    onChange: (x, y) => flightRef.current?.setLook(x, y),
  })

  useEffect(() => {
    const flight = createNightFlight(viewportRef.current, {
      imageUrl: IMAGE_URL,
      onReady: () => setReady(true),
      onTelemetry: setTelemetry,
    })
    flightRef.current = flight
    return () => {
      flightRef.current = null
      flight.dispose()
    }
  }, [])

  return (
    <main ref={rootRef} className={`flight${dragging ? ' flight--dragging' : ''}`}>
      <div ref={viewportRef} className="flight__viewport" />
      <AircraftWindow head={look} />
      <HudTop title="Night Flight - London" subtitle="ISS073-E-659216" />
      <HudBottom
        telemetry={telemetry}
        hint="Drag to look around / Double-click to reset view / Scroll to adjust altitude / ↑↓ to adjust speed"
      />
      <Loader hidden={ready}>Descending into London…</Loader>
    </main>
  )
}
