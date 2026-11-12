import { useEffect, useRef, useState } from 'react'
import { createNightFlight } from '@/scene/nightFlight.js'
import { DEFAULT_LOCATION_ID, LOCATIONS } from '@/data/locations.js'
import { useDragLook } from '@/hooks/useDragLook.js'
import AircraftWindow from '@/components/AircraftWindow/AircraftWindow.jsx'
import Loader from '@/components/Loader/Loader.jsx'
import { HudBottom, HudTop } from '@/components/Hud/Hud.jsx'
import './App.scss'

/**
 * ブロック: flight
 *   要素: flight__viewport（WebGLキャンバスの配置先）
 *   修飾子: flight--dragging（視点をドラッグしている間）
 */
export default function App({ locationId = DEFAULT_LOCATION_ID }) {
  const location = LOCATIONS[locationId] ?? LOCATIONS[DEFAULT_LOCATION_ID]
  const title = `Night Flight - ${location.name}`
  const rootRef = useRef(null)
  const viewportRef = useRef(null)
  const flightRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [telemetry, setTelemetry] = useState(null)

  const { look, dragging } = useDragLook(rootRef, {
    onChange: (x, y) => flightRef.current?.setLook(x, y),
  })

  useEffect(() => {
    setReady(false)
    setTelemetry(null)
    document.title = title
    const flight = createNightFlight(viewportRef.current, {
      imageUrl: location.imageUrl,
      onReady: () => setReady(true),
      onTelemetry: setTelemetry,
    })
    flightRef.current = flight
    return () => {
      flightRef.current = null
      flight.dispose()
    }
  }, [location, title])

  return (
    <main ref={rootRef} className={`flight${dragging ? ' flight--dragging' : ''}`}>
      <div ref={viewportRef} className="flight__viewport" />
      <AircraftWindow head={look} />
      <HudTop title={title} subtitle={location.imageId} />
      <HudBottom
        telemetry={telemetry}
        hint="Drag to look around / Double-click to reset view / Scroll to adjust altitude / ↑↓ to adjust speed"
      />
      <Loader hidden={ready}>Descending into {location.name}…</Loader>
    </main>
  )
}
