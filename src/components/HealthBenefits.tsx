import { motion } from 'motion/react'

const improvements = [
  { icon: '💤', label: 'Mejor calidad de sueño' },
  { icon: '⚡', label: 'Más energía diaria' },
  { icon: '🧘', label: 'Reducción del estrés' },
  { icon: '🦴', label: 'Alivio del dolor de espalda' },
  { icon: '🧠', label: 'Mayor concentración' },
  { icon: '🤸', label: 'Mayor movilidad' },
  { icon: '❤️', label: 'Mejor funcionamiento orgánico' },
  { icon: '🛡️', label: 'Sistema inmune fortalecido' },
  { icon: '😊', label: 'Mejor estado de ánimo' },
  { icon: '🏃', label: 'Mejor rendimiento físico' },
  { icon: '😮‍💨', label: 'Reducción de la ansiedad' },
  { icon: '🌟', label: 'Calidad de vida elevada' },
]

export default function HealthBenefits() {
  return (
    <section
      id="beneficios"
      style={{
        padding: '88px 24px',
        background: 'linear-gradient(160deg, #fdf6ee 0%, #f5e6d3 100%)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#c68642', marginBottom: 12 }}
        >
          Lo que vas a notar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#5c3d1e', marginBottom: 16, lineHeight: 1.2 }}
        >
          Mejoras en tu salud
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: 15, color: '#8b6330', marginBottom: 52, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}
        >
          Al alinear la columna y liberar el sistema nervioso, tu cuerpo recupera su capacidad de funcionar de forma óptima en todos los aspectos.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 14,
        }}>
          {improvements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(198,134,66,0.12)' }}
              style={{
                background: '#fdf6ee',
                border: '1px solid #e8d5be',
                borderRadius: 14,
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                textAlign: 'center',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: 32 }}>{item.icon}</span>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#5c3d1e', lineHeight: 1.4 }}>{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p style={{ fontSize: 18, color: '#5c3d1e', fontWeight: 600, marginBottom: 24, fontFamily: 'Georgia, serif' }}>
            ¿Listo para sentirte mejor?
          </p>
          <motion.a
            href={`https://wa.me/5492995502644?text=Hola%2C%20quiero%20reservar%20un%20turno`}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 32px', borderRadius: 999,
              background: '#25d366', color: '#fff',
              fontWeight: 700, fontSize: 16, textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(37,211,102,0.3)',
            }}
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
