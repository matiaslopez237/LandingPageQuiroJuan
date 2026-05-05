import { motion } from 'motion/react'

const reasons = [
  {
    emoji: '🎯',
    title: 'Análisis Específico',
    desc: 'Detectamos subluxaciones mediante evaluación manual precisa. Cada ajuste es exacto y dirigido al punto que tu columna necesita.',
  },
  {
    emoji: '🌿',
    title: 'Método 100% Natural',
    desc: 'Sin medicamentos, sin cirugías. Activamos la capacidad innata de tu cuerpo para sanar y mantener el equilibrio por sí mismo.',
  },
  {
    emoji: '✨',
    title: 'Resultados Reales',
    desc: 'La mayoría de los pacientes perciben mejoras desde las primeras sesiones: menos dolor, mejor postura, más energía y mejor descanso.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Para Toda la Familia',
    desc: 'Atendemos a personas de todas las edades, desde recién nacidos hasta adultos mayores, con técnicas adaptadas a cada etapa de la vida.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="por-que"
      style={{
        padding: '88px 24px',
        background: '#f5ede0',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#c68642', marginBottom: 12 }}
        >
          Nuestro diferencial
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#5c3d1e', marginBottom: 56, lineHeight: 1.2 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: '#fdf6ee',
                border: '1px solid #e8d5be',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'linear-gradient(135deg, #eddcca, #e8cba8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28,
              }}>
                {r.emoji}
              </div>
              <p style={{ fontWeight: 700, fontSize: 17, color: '#5c3d1e', lineHeight: 1.3 }}>{r.title}</p>
              <p style={{ fontSize: 14, color: '#8b6330', lineHeight: 1.75 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
