import { motion } from 'motion/react'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section
      id="nosotros"
      style={{
        padding: '88px 24px',
        background: '#fdf6ee',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Label */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#c68642', marginBottom: 12 }}
        >
          Quiénes somos
        </motion.p>

        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#5c3d1e', marginBottom: 52, lineHeight: 1.2 }}
        >
          Conocé a tu quiropráctico
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }} className="md:flex-row md:items-start md:gap-14">
          {/* Avatar / Foto placeholder */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <div style={{
              width: 200, height: 200, borderRadius: '50%',
              background: 'linear-gradient(135deg, #f0dcc4 0%, #e8cba8 100%)',
              border: '4px solid #c68642',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="38" r="22" fill="#d4a055" opacity="0.3" stroke="#c68642" strokeWidth="2"/>
                <path d="M15 100 C15 75 95 75 95 100" fill="#d4a055" opacity="0.3" stroke="#c68642" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, color: '#5c3d1e' }}>Lic. Juan Manuel Martinez</p>
              <p style={{ fontSize: 13, color: '#c68642', fontWeight: 600, marginTop: 4 }}>Quiropráctico</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ flex: 1, maxWidth: 560 }}
          >
            <p style={{ fontSize: 15, color: '#7a5230', lineHeight: 1.8, marginBottom: 18 }}>
              El Lic. Juan Manuel Martinez es quiropráctico con formación en la detección, análisis y corrección de subluxaciones vertebrales.
              Su enfoque está centrado en liberar el sistema nervioso para que el organismo funcione en su máxima expresión de forma completamente natural, sin medicamentos.
            </p>
            <p style={{ fontSize: 15, color: '#7a5230', lineHeight: 1.8, marginBottom: 28 }}>
              Trabaja con pacientes de todas las edades —desde bebés hasta adultos mayores— con un trato cercano y personalizado,
              buscando siempre entender la causa raíz de cada caso y no solo los síntomas.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[
                { num: '100%', label: 'Natural' },
                { num: 'Todas', label: 'las edades' },
                { num: 'Causa', label: 'raíz' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center', padding: '14px 20px', background: '#f5ede0', borderRadius: 14, border: '1px solid #e8d5be', minWidth: 90 }}>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: '#c68642' }}>{s.num}</p>
                  <p style={{ fontSize: 12, color: '#8b6330', marginTop: 2 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
