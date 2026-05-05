import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqs = [
  {
    q: '¿Es seguro para todas las edades?',
    a: 'Sí. La quiropraxia es apta para todas las edades, desde niños hasta adultos mayores.',
  },
  {
    q: '¿Cada cuánto debo ir?',
    a: 'La frecuencia es de cada 7, 10, 15 o 30 días, según la evaluación del profesional en cada caso.',
  },
  {
    q: '¿Duele el ajuste quiropráctico?',
    a: 'El ajuste es suave y generalmente no duele. Algunas personas sienten alivio inmediato. Puede haber leve sensibilidad muscular las primeras horas, que desaparece rápidamente.',
  },
  {
    q: '¿Cuántas sesiones necesito?',
    a: 'Depende de cada caso. Luego de la evaluación inicial, se indica el plan de tratamiento personalizado según el estado de la columna y los objetivos del paciente.',
  },
  {
    q: '¿Necesito derivación médica?',
    a: 'No. Podés solicitar turno directamente sin necesidad de derivación médica previa.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        borderBottom: '1px solid #e8d5be',
        padding: '18px 0',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <p style={{ fontWeight: 600, fontSize: 15, color: '#5c3d1e', lineHeight: 1.4 }}>{q}</p>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: '#c68642', fontSize: 14, flexShrink: 0, display: 'block' }}
        >
          ▲
        </motion.span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', fontSize: 14, color: '#8b6330', lineHeight: 1.7, marginTop: 10 }}
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="preguntas"
      style={{ padding: '72px 24px 80px', background: '#fdf6ee' }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontWeight: 700, fontSize: 16, color: '#5c3d1e', marginBottom: 8 }}
        >
          Preguntas frecuentes
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map(f => <Item key={f.q} {...f} />)}
        </motion.div>
      </div>
    </section>
  )
}
