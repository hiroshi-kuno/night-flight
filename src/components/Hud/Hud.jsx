import './Hud.scss'

/**
 * ブロック: hud
 *   修飾子: hud--top（上部）、hud--bottom（下部）
 */
export function HudTop({ title, subtitle }) {
  return (
    <header className="hud hud--top">
      <span className="hud__title">{title}</span>
      <span className="hud__subtitle">{subtitle}</span>
    </header>
  )
}

export function HudBottom({ telemetry, hint }) {
  if (!telemetry) return null
  const stats = [
    { label: 'ALT', value: `${Math.round(telemetry.altitudeM).toLocaleString('en-GB')} m` },
    { label: 'GS', value: `${Math.round(telemetry.speedKmh).toLocaleString('en-GB')} km/h` },
    { label: 'HDG', value: `${String(Math.round(telemetry.heading) % 360).padStart(3, '0')}°` },
  ]
  return (
    <footer className="hud hud--bottom">
      <dl className="hud__stats">
        {stats.map((s) => (
          <div key={s.label} className="hud__stat">
            <dt className="hud__label">{s.label}</dt>
            <dd className="hud__value">{s.value}</dd>
          </div>
        ))}
      </dl>
      <p className="hud__hint">{hint}</p>
    </footer>
  )
}
