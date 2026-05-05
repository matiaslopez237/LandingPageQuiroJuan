const benefits = [
  'Hernias de disco',
  'Cervicalgia y lumbalgia',
  'Contracturas musculares',
  'Protusión vertebral',
  'Corrección de mala postura',
  'Bruxismo',
  'Dolor ciático',
  'Dolor de cabeza y migraña',
  'Vértigo y mareos',
  'Mal descanso',
  'Dolores articulares o musculares',
  'Ansiedad',
  'Rectificación cervical',
  'Personas que pasan mucho tiempo sentadas o paradas',
]

export default function Treatment() {
  return (
    <section
      id="tratamiento"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #eddcca 0%, #fdf6ee 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#5c3d1e' }}
        >
          Tratamiento Quiropráctico
        </h2>

        <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#7a5230' }}>
          Ciencia que detecta, analiza y corrige subluxaciones vertebrales. Al alinear
          la columna se libera el sistema nervioso. Para todas las edades, hombres y mujeres.
        </p>

        {/* Info cards */}
        <div className="flex flex-col gap-3 mb-8">
          <div
            className="rounded-xl px-5 py-4 text-left text-base leading-relaxed"
            style={{ background: '#f5ede0', border: '1px solid #e8d5be' }}
          >
            <span className="font-bold" style={{ color: '#5c3d1e' }}>Indicaciones: </span>
            <span style={{ color: '#8b6330' }}>Para todas las edades, hombres y mujeres.</span>
          </div>
          <div
            className="rounded-xl px-5 py-4 text-left text-base leading-relaxed"
            style={{ background: '#f5ede0', border: '1px solid #e8d5be' }}
          >
            <span className="font-bold" style={{ color: '#5c3d1e' }}>Sesiones: </span>
            <span style={{ color: '#8b6330' }}>Cada 7, 10, 15 o 30 días según evaluación profesional.</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-left">
          <p className="font-bold text-lg mb-4" style={{ color: '#5c3d1e' }}>Beneficios</p>
          <ul className="flex flex-col gap-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base" style={{ color: '#7a5230' }}>
                <span className="mt-0.5 font-bold" style={{ color: '#c68642' }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <hr className="mt-12" style={{ borderColor: '#e8d5be' }} />
      </div>
    </section>
  )
}
