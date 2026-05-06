import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8572A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Magnifying glass with spine inside */}
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <line x1="8" y1="9" x2="14" y2="9"/>
        <line x1="8" y1="12" x2="14" y2="12"/>
        <line x1="8" y1="15" x2="12" y2="15"/>
      </svg>
    ),
    title: 'Análisis Específico',
    desc: 'Detectamos subluxaciones mediante evaluación manual precisa. Cada ajuste es exacto y dirigido al punto que tu columna necesita.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8572A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Leaf — natural */}
        <path d="M6.5 6.5C9 3 16 2 20 5c2 8-5 14-11 13C3 18 3 11 6.5 6.5z"/>
        <path d="M6.5 6.5l8.5 8.5"/>
      </svg>
    ),
    title: 'Formación Universitaria',
    desc: 'Egresado universitario con formación clínica específica en quiropraxia, aplicando protocolos respaldados por evidencia científica.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8572A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Checkmark circle */}
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Resultados Reales',
    desc: 'La mayoría de los pacientes perciben mejoras desde las primeras sesiones: menos dolor, mejor postura, más energía y mejor descanso.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8572A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Family / group of people */}
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Trato Cercano',
    desc: 'Cada paciente es escuchado y comprendido. El objetivo es encontrar la causa raíz, no enmascarar síntomas, con seguimiento personalizado.',
  },
]

export default function WhyUs() {
  return (
    <section id="por-que" style={{
      padding: '88px 24px',
      backgroundColor: '#EBF4FF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Nuestro diferencial
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 56, lineHeight: 1.2 }}>
          ¿Por qué elegirnos?
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(27,58,107,0.12)' }}
              style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'linear-gradient(135deg, #EBF4FF, #D8EAFF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {r.icon}
              </div>
              <p style={{ fontWeight: 700, fontSize: 17, color: '#1B3A6B', lineHeight: 1.3 }}>{r.title}</p>
              <p style={{ fontSize: 14, color: '#5478BC', lineHeight: 1.75 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
