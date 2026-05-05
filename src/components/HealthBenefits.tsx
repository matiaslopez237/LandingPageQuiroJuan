import { motion } from 'motion/react'

const improvements = [
  { label: 'Mejor calidad de sueño', icon: <path d="M17.75 4.09l-2.53 2.94-1.22-1.19 2.53-2.94 1.22 1.19zm-15.5 0l2.53 2.94 1.22-1.19L3.47 2.9 2.25 4.09zM12 4V2h-2v2h2zm6.97 4.12c0 3.13-1.73 5.85-4.28 7.28C13.18 16.7 12.12 18 10.5 18c-2.76 0-5-2.24-5-5 0-1.62 1.3-2.97 2.97-2.97H12c1.1 0 2-.9 2-2V4.5C17.41 5.2 18.97 6.85 18.97 8.12zM11 20v2h2v-2h-2zm-4.78-.47l-1.22 1.19 1.53 1.53 1.22-1.19-1.53-1.53zm10.56 0l-1.53 1.53 1.22 1.19 1.53-1.53-1.22-1.19z"/> },
  { label: 'Más energía diaria', icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></> },
  { label: 'Reducción del estrés', icon: <><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/><line x1="9" y1="9" x2="9.01" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="15" y1="9" x2="15.01" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/></> },
  { label: 'Alivio del dolor de espalda', icon: <><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></> },
  { label: 'Mayor concentración', icon: <><circle cx="12" cy="12" r="3"/><path d="M12 1v3m0 14v3m11-11h-3M4 12H1m15.36-6.36-2.12 2.12M6.76 17.24l-2.12 2.12m14.72 0-2.12-2.12M6.76 6.76 4.64 4.64"/></> },
  { label: 'Mayor movilidad', icon: <><path d="M13.73 4a2 2 0 0 1 3.54 0l8 14A2 2 0 0 1 23.5 21h-16a2 2 0 0 1-1.77-2.95L13.73 4z" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9v5M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></> },
  { label: 'Mejor funcionamiento orgánico', icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></> },
  { label: 'Sistema inmune fortalecido', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></> },
  { label: 'Mejor estado de ánimo', icon: <><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2" stroke="white" strokeLinecap="round" fill="none" strokeWidth="1.5"/><line x1="9" y1="9" x2="9.01" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><line x1="15" y1="9" x2="15.01" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></> },
  { label: 'Mejor rendimiento físico', icon: <><circle cx="12" cy="5" r="2"/><path d="M12 7v8M9 11h6M10 15l-2 4M14 15l2 4"/></> },
  { label: 'Reducción de la ansiedad', icon: <><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"/><path d="M12 8v4l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></> },
  { label: 'Calidad de vida elevada', icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></> },
]

export default function HealthBenefits() {
  return (
    <section id="beneficios" style={{ padding: '88px 24px', background: '#F8FAFF' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Lo que vas a notar
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 16 }}>
          Mejoras en tu salud
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: 15, color: '#5478BC', marginBottom: 52, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          Al alinear la columna y liberar el sistema nervioso, tu cuerpo recupera su capacidad de funcionar de forma óptima en todos los aspectos.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 14 }}>
          {improvements.map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(27,58,107,0.1)' }}
              style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 14, padding: '20px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center', cursor: 'default' }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 12, background: 'linear-gradient(135deg, #1B3A6B, #2D5AA0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  {item.icon}
                </svg>
              </div>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#1B3A6B', lineHeight: 1.4 }}>{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ fontSize: 18, color: '#1B3A6B', fontWeight: 600, marginBottom: 24, fontFamily: 'Georgia, serif' }}>
            ¿Listo para sentirte mejor?
          </p>
          <motion.a href="https://wa.me/5492995502644?text=Hola%2C%20quiero%20reservar%20un%20turno"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 999, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 28px rgba(37,211,102,0.3)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Reservar Turno por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
