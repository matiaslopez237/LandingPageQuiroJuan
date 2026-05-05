import { useState } from 'react'

const faqs = [
  {
    question: '¿Es seguro para todas las edades?',
    answer:
      'Sí. La quiropraxia es apta para todas las edades, desde niños hasta adultos mayores.',
  },
  {
    question: '¿Cada cuánto debo ir?',
    answer:
      'La frecuencia es de cada 7, 10, 15 o 30 días, según la evaluación del profesional en cada caso.',
  },
  {
    question: '¿Duele el ajuste quiropráctico?',
    answer:
      'El ajuste es suave y generalmente no duele. Algunas personas sienten alivio inmediato. Puede haber leve sensibilidad muscular las primeras horas, que desaparece rápidamente.',
  },
  {
    question: '¿Cuántas sesiones necesito?',
    answer:
      'Depende de cada caso. Luego de la evaluación inicial, el profesional indica el plan de tratamiento personalizado según el estado de la columna y los objetivos del paciente.',
  },
  {
    question: '¿Necesito derivación médica?',
    answer:
      'No. Podés solicitar turno directamente sin necesidad de derivación médica previa.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b py-4 cursor-pointer"
      style={{ borderColor: '#e8d5be' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <p className="text-base font-semibold text-left" style={{ color: '#5c3d1e' }}>
          {question}
        </p>
        <span
          className="text-lg transition-transform duration-200 flex-shrink-0"
          style={{
            color: '#c68642',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▲
        </span>
      </div>
      {open && (
        <p className="mt-3 text-sm md:text-base leading-relaxed text-left" style={{ color: '#8b6330' }}>
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="preguntas"
      className="py-20 px-6"
      style={{ background: '#fdf6ee' }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-bold text-lg mb-6" style={{ color: '#5c3d1e' }}>
          Preguntas frecuentes
        </p>
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  )
}
