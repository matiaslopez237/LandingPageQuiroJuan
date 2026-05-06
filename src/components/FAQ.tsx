import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const faqs = [
  { q: '¿Es seguro para todas las edades?', a: 'Sí. La quiropraxia es apta para todas las edades, desde niños hasta adultos mayores.' },
  { q: '¿Cada cuánto debo ir?', a: 'La frecuencia es de cada 7, 10, 15 o 30 días, según la evaluación del profesional en cada caso.' },
  { q: '¿Duele el ajuste quiropráctico?', a: 'El ajuste es suave y generalmente no duele. Algunas personas sienten alivio inmediato. Puede haber leve sensibilidad muscular las primeras horas, que desaparece rápidamente.' },
  { q: '¿Cuántas sesiones necesito?', a: 'Depende de cada caso. Luego de la evaluación inicial, se indica el plan de tratamiento personalizado según el estado de la columna y los objetivos del paciente.' },
  { q: '¿Necesito derivación médica?', a: 'No. Podés solicitar turno directamente sin necesidad de derivación médica previa.' },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)}
      style={{ borderBottom: '1px solid #D0DCF0', padding: '20px 0', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <p style={{ fontWeight: 600, fontSize: 15, color: '#1B3A6B', lineHeight: 1.4 }}>{q}</p>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }}
          style={{ width: 24, height: 24, borderRadius: '50%', background: open ? '#E8572A' : '#EBF4FF', border: `1px solid ${open ? '#E8572A' : '#D0DCF0'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={open ? 'white' : '#2D5AA0'} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', fontSize: 14, color: '#5478BC', lineHeight: 1.75, marginTop: 12 }}>
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="preguntas" style={{
      padding: '72px 24px 80px',
      backgroundColor: '#EBF4FF',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12, textAlign: 'center' }}>
          Dudas frecuentes
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#1B3A6B', marginBottom: 40, textAlign: 'center' }}>
          Preguntas frecuentes
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {faqs.map(f => <Item key={f.q} {...f} />)}
        </motion.div>
      </div>
    </section>
  )
}
