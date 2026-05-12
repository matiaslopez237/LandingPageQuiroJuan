import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const reviews = [
  { name: 'Mariana Belén Tagliani', text: 'Muy profesional Juan Manuel, la atención es excelente. Mejoró notablemente mi movilidad. Muy recomendable.' },
  { name: 'Yamil Molina', text: 'Excelente atención y profesional, sumamente recomendable. En mi carrera de deportista me enseñó mucho y siempre a disposición para cualquier consulta.' },
  { name: 'Lis Canteros', text: 'Si supieran lo importante que es ir al quiropráctico una vez por mes se ahorrarían de muchos dolores y analgésicos. Juan un genio, gracias por dejarme a punto para cada competencia. Súper recomendable 10/10.' },
  { name: 'Sofia Cares', text: 'Excelente profesional. Un lugar muy cálido, me ayudó muchísimo con mis contracturas y dolores de cabeza producto del bruxismo.' },
  { name: 'Ruben Sepulveda', text: 'Excelente atención. No más sufrir dolores de espalda.' },
  { name: 'Elena Tsareva', text: 'No solo yo, mucha gente que fue atendida por Juan quedamos de 10. Esperamos que pueda volver a atender en San Rafael.' },
  { name: 'PATRI URIBURU', text: 'Con cualquier dolor que vayas, encuentra la solución para solucionarlo.' },
  { name: 'Maria Fernandez', text: 'Excelente como siempre.' },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
  const colors = ['#1B3A6B', '#2D5AA0', '#E8572A', '#3B6EC4', '#C04A24', '#1E4D8C']
  const color = colors[name.charCodeAt(0) % colors.length]
  return (
    <div style={{ width: 40, height: 40, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reseñas" style={{
      padding: '80px 24px',
      backgroundColor: '#F8FAFF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Lo que dicen nuestros pacientes
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 12 }}>
          Reseñas de Google
        </motion.h2>

        {/* Promedio */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: '#1B3A6B', lineHeight: 1 }}>5.0</span>
          <div>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F5A623">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 13, color: '#5478BC', marginTop: 4 }}>17 reseñas en Google</p>
          </div>
        </motion.div>

        {/* Grid de tarjetas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {reviews.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ background: '#FFFFFF', border: '1px solid #D0DCF0', borderRadius: 16, padding: '20px 18px' }}>
              <Stars />
              <p style={{ fontSize: 14, color: '#2D5AA0', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar name={r.name} />
                <p style={{ fontSize: 13, fontWeight: 600, color: '#1B3A6B' }}>{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link a Google */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://www.google.com/maps/place/Quiropraxia+Cipolletti+-+Lic.+Mart%C3%ADnez+Juan+Manuel+Columna+cervical,+lumbar,+dorsal/@-38.9365541,-68.0073596,14z/data=!4m8!3m7!1s0x960a313b9070b8af:0x8013927c31a64ff8!8m2!3d-38.9314686!4d-67.9724133!9m1!1b1!16s%2Fg%2F11z1fqyftk"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#2D5AA0', fontWeight: 600, textDecoration: 'none', border: '1px solid #D0DCF0', borderRadius: 999, padding: '10px 20px', background: '#fff' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#E8572A"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
