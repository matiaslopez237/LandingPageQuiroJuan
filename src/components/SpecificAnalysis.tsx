import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

const recoveryItems = [
  'Que los discos y ligamentos respeten sus tiempos biológicos de recuperación.',
  'Que el cuerpo se adapte mejor al estrés diario (físico, químico y emocional).',
  'Que el sistema nervioso sane y organice mejor a todo el organismo.',
]

export default function SpecificAnalysis() {
  return (
    <section id="analisis" style={{
      padding: '80px 24px',
      backgroundColor: '#FFFFFF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
            Diagnóstico
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 20 }}>
            Análisis Específico
          </h2>
          <p style={{ fontSize: 15, color: '#5478BC', lineHeight: 1.8, marginBottom: 28 }}>
            Detectamos subluxaciones mediante evaluación manual precisa y utilizando un <strong style={{ color: '#1B3A6B' }}>thermo scanner</strong>. Cada ajuste es exacto y dirigido al punto que tu columna necesita. <em>No adivinamos: medimos.</em>
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ border: '1px solid #D0DCF0', borderRadius: 16, overflow: 'hidden', marginBottom: 36 }}>
          <img
            src={`${import.meta.env.BASE_URL}thermoscanner.png`}
            alt="Visualización Thermo Scanner en computadora"
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p style={{ fontSize: 15, color: '#5478BC', lineHeight: 1.8, marginBottom: 20 }}>
            Respetar las etapas de cuidado es la base para un mantenimiento exitoso. Esto permite:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recoveryItems.map((item, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#2D5AA0', background: '#EBF4FF', border: '1px solid #D0DCF0', borderRadius: 12, padding: '14px 16px', lineHeight: 1.6 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="10" cy="10" r="10" fill="#E8572A" opacity="0.12"/>
                  <path d="M6 10l2.5 2.5 5-5" stroke="#E8572A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
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
