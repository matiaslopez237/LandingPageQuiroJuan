import { motion } from 'motion/react'

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Treatment() {
  return (
    <section
      id="tratamiento"
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #f0dcc4 0%, #fdf6ee 100%)',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 700,
              color: '#5c3d1e',
              marginBottom: 14,
            }}
          >
            Tratamiento Quiropráctico
          </h2>
          <p style={{ fontSize: 15, color: '#7a5230', lineHeight: 1.7, marginBottom: 28 }}>
            Ciencia que detecta, analiza y corrige subluxaciones vertebrales. Al alinear
            la columna se libera el sistema nervioso. Para todas las edades, hombres y mujeres.
          </p>
        </motion.div>

        {/* Cards info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}
        >
          {[
            { label: 'Indicaciones:', text: 'Para todas las edades, hombres y mujeres.' },
            { label: 'Sesiones:', text: 'Cada 7, 10, 15 o 30 días según evaluación profesional.' },
          ].map(item => (
            <div
              key={item.label}
              style={{
                background: '#fdf6ee',
                border: '1px solid #e8d5be',
                borderRadius: 12,
                padding: '14px 18px',
                fontSize: 15,
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontWeight: 700, color: '#5c3d1e' }}>{item.label} </span>
              <span style={{ color: '#8b6330' }}>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p style={{ fontWeight: 700, fontSize: 16, color: '#5c3d1e', marginBottom: 16 }}>Beneficios</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {benefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#7a5230' }}
              >
                <span style={{ color: '#c68642', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.hr
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: 56, border: 'none', borderTop: '1px solid #e8d5be' }}
        />
      </div>
    </section>
  )
}
