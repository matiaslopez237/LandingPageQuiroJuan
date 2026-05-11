import { motion } from 'motion/react'
import { HEX_BG, HEX_SIZE } from '../hexPattern'

const WA = '5492995502644'

export default function Hero() {
  return (
    <>
      <section id="inicio" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#D8EAFF', /* fills clipped area so no white gap at wave edges */
      }}>
        {/* ── LEFT PANEL: content ── */}
        <div style={{
          flex: '0 0 56%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '100px 56px 60px 48px',
          backgroundColor: '#F0F6FF',
          backgroundImage: [
            'radial-gradient(ellipse 80% 60% at 45% 40%, rgba(232,87,42,0.07) 0%, transparent 65%)',
            'radial-gradient(ellipse 70% 70% at 80% 80%, rgba(27,58,107,0.07) 0%, transparent 55%)',
            'linear-gradient(160deg, #F8FAFF 0%, #EBF4FF 55%, #D8EAFF 100%)',
            HEX_BG,
          ].join(', '),
          backgroundSize: `100% 100%, 100% 100%, 100% 100%, ${HEX_SIZE}`,
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Logo + columna en fila */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}columnahero.png`}
              alt="Columna vertebral"
              style={{ height: 'clamp(80px, 10vw, 140px)', width: 'auto', flexShrink: 0 }}
            />
            <img
              src={`${import.meta.env.BASE_URL}LogoJuanHero.png`}
              alt="Quiropraxia Lic. Juan Manuel Martinez"
              style={{ width: 'clamp(180px, 22vw, 320px)', height: 'auto' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontSize: 'clamp(15px, 1.8vw, 19px)',
              color: '#2D5AA0',
              maxWidth: 440,
              lineHeight: 1.6,
              marginBottom: 40,
              fontWeight: 400,
            }}
          >
            Detectamos, analizamos y corregimos subluxaciones vertebrales para mejorar tu calidad de vida
          </motion.p>

          <motion.a
            href={`https://wa.me/${WA}?text=Hola%2C%20quiero%20reservar%20un%20turno`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '15px 34px',
              borderRadius: 999,
              background: '#25D366',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1DA851')}
            onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Reservar Turno por WhatsApp
          </motion.a>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: 52, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: 0.35 }}
          >
            <span style={{ fontSize: 10, color: '#5478BC', letterSpacing: 1.5, textTransform: 'uppercase' }}>Scroll</span>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4 6.5L9 11.5L14 6.5" stroke="#5478BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        {/* ── RIGHT PANEL: photo with wave clip-path ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            flex: '1 1 44%',
            position: 'relative',
            clipPath: 'polygon(9% 0%, 100% 0%, 100% 100%, 9% 100%, 8.4% 92%, 6.9% 84%, 4.8% 76%, 2.6% 68%, 0.9% 60%, 0% 50%, 0.9% 40%, 2.6% 32%, 4.8% 24%, 6.9% 16%, 8.4% 8%)',
            marginLeft: '-3px', /* close any sub-pixel gap */
          }}
        >
          <img
            src="/hero-foto.jpg"
            alt="Juan Manuel Martinez realizando ajuste quiropráctico"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 65%',
              display: 'block',
            }}
          />
          {/* Left-edge fade for smooth wave transition */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0, width: '22%',
            background: 'linear-gradient(to right, rgba(240,246,255,0.92) 0%, rgba(240,246,255,0.4) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          {/* Subtle dark gradient at bottom for polish */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgba(27,58,107,0.18) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </section>

      {/* Responsive: stack vertically on mobile */}
      <style>{`
        @media (max-width: 767px) {
          #inicio { flex-direction: column !important; }
          #inicio > div:first-of-type { flex: unset !important; padding: 80px 24px 40px !important; }
          #inicio > div:last-of-type  { flex: unset !important; height: 55vw !important; clip-path: none !important; margin-left: 0 !important; }
        }
      `}</style>
    </>
  )
}
