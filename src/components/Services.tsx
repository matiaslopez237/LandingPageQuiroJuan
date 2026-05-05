import { motion } from 'motion/react'

const services = [
  {
    icon: (
      <>
        {/* Spine / vertebrae */}
        <rect x="8" y="2" width="8" height="4" rx="1.5" fill="none"/>
        <rect x="8" y="9" width="8" height="4" rx="1.5" fill="none"/>
        <rect x="8" y="16" width="8" height="4" rx="1.5" fill="none"/>
        <line x1="12" y1="6" x2="12" y2="9"/>
        <line x1="12" y1="13" x2="12" y2="16"/>
      </>
    ),
    label: 'Ajuste Quiropráctico',
    desc: 'Corrección precisa de subluxaciones vertebrales mediante técnicas manuales suaves y específicas para cada paciente.',
  },
  {
    icon: (
      <>
        {/* Person + heart */}
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none"/>
        <circle cx="12" cy="7" r="4" fill="none"/>
        <path d="M17.5 14c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5L17 17l-2-2c-.4-.4-.4-1.1 0-1.5.4-.4 1.1-.4 1.5 0z"/>
      </>
    ),
    label: 'Atención Personalizada',
    desc: 'Cada sesión es adaptada a tus necesidades. Un plan de tratamiento único diseñado para tu caso y objetivos.',
  },
  {
    icon: (
      <>
        {/* Group of people — different sizes */}
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none"/>
        <circle cx="9" cy="7" r="4" fill="none"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none"/>
      </>
    ),
    label: 'Para Todas las Edades',
    desc: 'Desde bebés y niños hasta adultos mayores. La quiropraxia es segura y beneficiosa en todas las etapas de la vida.',
  },
  {
    icon: (
      // ECG / pulse line — bienestar integral
      <path d="M2 12h4l2-7 4 14 3-7h3l2-3h4" fill="none"/>
    ),
    label: 'Bienestar Integral',
    desc: 'Más allá de aliviar el dolor, trabajamos para mejorar tu energía, sueño y funcionamiento general del organismo.',
  },
  {
    icon: (
      <>
        {/* Leaf — 100% natural */}
        <path d="M6.5 6.5C9 3 16 2 20 5c2 8-5 14-11 13C3 18 3 11 6.5 6.5z" fill="none"/>
        <path d="M6.5 6.5l8.5 8.5" fill="none"/>
      </>
    ),
    label: 'Método 100% Natural',
    desc: 'Sin medicamentos ni cirugías. Activamos la capacidad innata del cuerpo de sanar y mantener el equilibrio por sí mismo.',
  },
  {
    icon: (
      <>
        {/* Calendar */}
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </>
    ),
    label: 'Frecuencia Flexible',
    desc: 'Sesiones cada 7, 10, 15 o 30 días según tu plan de tratamiento. Nos adaptamos a tu ritmo y disponibilidad.',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{
      padding: '88px 24px',
      backgroundColor: '#EBF4FF',
      backgroundImage: [
        'repeating-linear-gradient(45deg, rgba(27,58,107,0.04) 0, rgba(27,58,107,0.04) 1px, transparent 0, transparent 50%)',
        'linear-gradient(180deg, #EBF4FF 0%, #F8FAFF 100%)',
      ].join(', '),
      backgroundSize: '18px 18px, 100% 100%',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Lo que ofrecemos
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 16 }}>
          Servicios
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: 15, color: '#5478BC', marginBottom: 56, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          Un enfoque integral para cuidar tu columna y liberar el potencial natural de tu organismo.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(27,58,107,0.1)' }}
              style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 18, padding: '28px 24px' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg, #1B3A6B, #2D5AA0)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <p style={{ fontWeight: 700, fontSize: 15, color: '#1B3A6B', marginBottom: 10, lineHeight: 1.3 }}>{s.label}</p>
              <p style={{ fontSize: 14, color: '#5478BC', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
