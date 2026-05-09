import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function WhyNotSymptoms() {
  return (
    <section id="por-que" style={{
      padding: '80px 24px',
      backgroundColor: '#F8FAFF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
            Filosofía de cuidado
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 20, lineHeight: 1.35 }}>
            ¿Por qué la Quiropraxia no se enfoca en los síntomas?
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 16, padding: '28px 24px', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #1B3A6B, #2D5AA0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8"/>
                <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1B3A6B', lineHeight: 1.4, margin: 0 }}>
              Los síntomas son subjetivos y engañosos
            </h3>
          </div>
          <p style={{ fontSize: 15, color: '#5478BC', lineHeight: 1.8, margin: 0 }}>
            El dolor es una señal, pero no siempre es una señal clara. Un síntoma físico puede tener múltiples orígenes: <strong style={{ color: '#1B3A6B' }}>físicos, químicos, emocionales o incluso espirituales</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 16, padding: '28px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #E8572A, #F07A50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1B3A6B', lineHeight: 1.4, margin: 0 }}>
              Cuidado basado en evidencia real, no en sensaciones
            </h3>
          </div>
          <p style={{ fontSize: 15, color: '#5478BC', lineHeight: 1.8, margin: 0 }}>
            A veces, un malestar corporal cambia simplemente al modificar una actitud emocional o realizar ejercicio. Por eso, basar un cuidado profesional únicamente en "lo que el paciente siente" sería trabajar sobre <strong style={{ color: '#1B3A6B' }}>información incompleta y variable</strong>.
          </p>
        </motion.div>

        <motion.hr initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: 56, border: 'none', borderTop: '1px solid #D0DCF0' }} />
      </div>
    </section>
  )
}
