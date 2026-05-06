import { motion } from 'motion/react'

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section id="nosotros" style={{
      padding: '88px 24px',
      backgroundColor: '#FFFFFF',
      backgroundImage: 'radial-gradient(circle, rgba(45,90,160,0.05) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Quiénes somos
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 52, lineHeight: 1.2 }}>
          Conocé a tu quiropráctico
        </motion.h2>

        <div className="about-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 44 }}>
          {/* Foto */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 210, height: 210, borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #E8572A',
              boxShadow: '0 8px 32px rgba(232,87,42,0.2)',
              background: '#EBF4FF',
            }}>
              <img
                src="/LandingPageQuiroJuan/juan.jpg"
                alt="Lic. Juan Manuel Martinez"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={e => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const parent = t.parentElement
                  if (parent) {
                    parent.style.display = 'flex'
                    parent.style.alignItems = 'center'
                    parent.style.justifyContent = 'center'
                    parent.innerHTML = `<svg width="90" height="90" viewBox="0 0 24 24" fill="#2D5AA0" opacity="0.4"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`
                  }
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, color: '#1B3A6B' }}>Lic. Juan Manuel Martinez</p>
              <p style={{ fontSize: 13, color: '#E8572A', fontWeight: 600, marginTop: 4 }}>Quiropráctico</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ flex: 1, maxWidth: 560 }}>
            <p style={{ fontSize: 15, color: '#2D5AA0', lineHeight: 1.85, marginBottom: 18 }}>
              El Lic. Juan Manuel Martinez es quiropráctico con formación en la detección, análisis y corrección de subluxaciones vertebrales.
              Su enfoque está centrado en liberar el sistema nervioso para que el organismo funcione en su máxima expresión de forma completamente natural, sin medicamentos.
            </p>
            <p style={{ fontSize: 15, color: '#2D5AA0', lineHeight: 1.85, marginBottom: 32 }}>
              Trabaja con pacientes de todas las edades, desde bebés hasta adultos mayores, con un trato cercano y personalizado,
              buscando siempre entender la causa raíz de cada caso y no solo los síntomas.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
