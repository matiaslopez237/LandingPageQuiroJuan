import { motion } from 'motion/react'

const services = [
  {
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>,
    label: 'Ajuste Quiropráctico',
    desc: 'Corrección precisa de subluxaciones vertebrales mediante técnicas manuales suaves y específicas para cada paciente.',
  },
  {
    icon: <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>,
    label: 'Atención Personalizada',
    desc: 'Cada sesión es adaptada a tus necesidades y objetivos. Un plan de tratamiento único diseñado para tu caso.',
  },
  {
    icon: <><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"/></>,
    label: 'Para Todas las Edades',
    desc: 'Desde bebés y niños hasta adultos mayores. La quiropraxia es segura y beneficiosa en todas las etapas de la vida.',
  },
  {
    icon: <><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/></>,
    label: 'Bienestar Integral',
    desc: 'Más allá de aliviar el dolor, trabajamos para mejorar tu calidad de vida, energía, sueño y funcionamiento general del organismo.',
  },
  {
    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></>,
    label: 'Método 100% Natural',
    desc: 'Sin medicamentos ni cirugías. Activamos la capacidad innata del cuerpo de sanar y mantener el equilibrio por sí mismo.',
  },
  {
    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></>,
    label: 'Frecuencia Flexible',
    desc: 'Sesiones cada 7, 10, 15 o 30 días según tu plan de tratamiento. Nos adaptamos a tu ritmo y disponibilidad.',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        padding: '88px 24px',
        background: 'linear-gradient(180deg, #f0dcc4 0%, #fdf6ee 100%)',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#c68642', marginBottom: 12 }}
        >
          Lo que ofrecemos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#5c3d1e', marginBottom: 16, lineHeight: 1.2 }}
        >
          Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: 15, color: '#8b6330', marginBottom: 56, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}
        >
          Un enfoque integral para cuidar tu columna y liberar el potencial natural de tu organismo.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(198,134,66,0.15)' }}
              style={{
                background: '#fdf6ee',
                border: '1px solid #e8d5be',
                borderRadius: 18,
                padding: '28px 24px',
                cursor: 'default',
                transition: 'box-shadow 0.2s',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, #f5ede0, #eddcca)',
                border: '1px solid #e8d5be',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 18,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#c68642" xmlns="http://www.w3.org/2000/svg">
                  {s.icon}
                </svg>
              </div>
              <p style={{ fontWeight: 700, fontSize: 15, color: '#5c3d1e', marginBottom: 10, lineHeight: 1.3 }}>{s.label}</p>
              <p style={{ fontSize: 14, color: '#8b6330', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
