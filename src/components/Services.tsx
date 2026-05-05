import { motion } from 'motion/react'

const services = [
  { icon: <><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></>, label: 'Ajuste Quiropráctico', desc: 'Corrección precisa de subluxaciones vertebrales mediante técnicas manuales suaves y específicas para cada paciente.' },
  { icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>, label: 'Atención Personalizada', desc: 'Cada sesión es adaptada a tus necesidades. Un plan de tratamiento único diseñado para tu caso y objetivos.' },
  { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, label: 'Para Todas las Edades', desc: 'Desde bebés y niños hasta adultos mayores. La quiropraxia es segura y beneficiosa en todas las etapas de la vida.' },
  { icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>, label: 'Bienestar Integral', desc: 'Más allá de aliviar el dolor, trabajamos para mejorar tu energía, sueño y funcionamiento general del organismo.' },
  { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, label: 'Método 100% Natural', desc: 'Sin medicamentos ni cirugías. Activamos la capacidad innata del cuerpo de sanar y mantener el equilibrio por sí mismo.' },
  { icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, label: 'Frecuencia Flexible', desc: 'Sesiones cada 7, 10, 15 o 30 días según tu plan de tratamiento. Nos adaptamos a tu ritmo y disponibilidad.' },
]

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '88px 24px', background: 'linear-gradient(180deg, #EBF4FF 0%, #F8FAFF 100%)' }}>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
