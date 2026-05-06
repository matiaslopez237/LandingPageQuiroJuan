import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const benefits = [
  'Hernias de disco','Cervicalgia y lumbalgia','Contracturas musculares','Protusión vertebral',
  'Corrección de mala postura','Bruxismo','Dolor ciático','Dolor de cabeza y migraña',
  'Vértigo y mareos','Mal descanso','Dolores articulares o musculares','Ansiedad',
  'Rectificación cervical','Personas que pasan mucho tiempo sentadas o paradas',
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function Treatment() {
  return (
    <section id="tratamiento" style={{
      padding: '80px 24px',
      backgroundColor: '#FFFFFF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
            Tratamiento
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 14 }}>
            Tratamiento Quiropráctico
          </h2>
          <p style={{ fontSize: 15, color: '#5478BC', lineHeight: 1.8, marginBottom: 28 }}>
            Al corregir las subluxaciones vertebrales, la columna recupera su alineación y el sistema nervioso puede funcionar sin interferencias, mejorando la salud de todo el organismo.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          {[
            { label: 'Indicaciones:', text: 'Cualquier persona con síntomas o que busque prevención y bienestar general.' },
            { label: 'Sesiones:', text: 'Cada 7, 10, 15 o 30 días según evaluación profesional.' },
          ].map(item => (
            <div key={item.label} style={{ background: '#EBF4FF', border: '1px solid #D0DCF0', borderRadius: 12, padding: '14px 18px', fontSize: 15, lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700, color: '#1B3A6B' }}>{item.label} </span>
              <span style={{ color: '#5478BC' }}>{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}>
          <p style={{ fontWeight: 700, fontSize: 16, color: '#1B3A6B', marginBottom: 16 }}>Indicado para</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {benefits.map((b, i) => (
              <motion.li key={b}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#2D5AA0' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="9" cy="9" r="9" fill="#E8572A" opacity="0.12"/>
                  <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#E8572A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.hr initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: 56, border: 'none', borderTop: '1px solid #D0DCF0' }} />
      </div>
    </section>
  )
}
