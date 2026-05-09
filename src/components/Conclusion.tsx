import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

export default function Conclusion() {
  return (
    <section id="conclusion" style={{
      padding: '80px 24px',
      backgroundColor: '#1B3A6B',
      backgroundImage: HEX_BG,
      backgroundSize: HEX_SIZE,
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E8572A', marginBottom: 12 }}>
          Conclusión
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 28, lineHeight: 1.35 }}>
          El tiempo que vos decidas estar con calidad de vida al 100%
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '28px 24px', marginBottom: 40, textAlign: 'left' }}>
          <p style={{ fontSize: 15, color: '#C8D8F0', lineHeight: 1.85, margin: 0 }}>
            <strong style={{ color: '#FFFFFF' }}>¿Cuánto tiempo tenés que asistir al quiropráctico?</strong> El tiempo que desees tener una gran calidad de vida. Si los períodos entre ajustes están bien definidos, tu funcionamiento crecerá de forma constante. Aunque las visitas se distancien, lo ganado se sostiene. Tu quiropráctico te indicará cuáles son tus períodos de estabilidad logrados para que siempre estés funcionando al 100%.
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', marginBottom: 28, fontFamily: 'Georgia, serif' }}>
          ¿Hace cuánto que no chequeás?
        </motion.p>

        <motion.a
          href="https://wa.me/5492995502644?text=Hola%2C%20quiero%20reservar%20un%20turno"
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 999, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Reservá tu turno
        </motion.a>
      </div>
    </section>
  )
}
