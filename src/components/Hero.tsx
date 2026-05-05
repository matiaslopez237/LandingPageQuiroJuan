import { motion } from 'motion/react'

const WA = '5492995502644'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 60px',
        background: 'linear-gradient(160deg, #fdf6ee 0%, #f8edd8 40%, #f0dcc4 100%)',
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginBottom: 40 }}
      >
        <svg width="110" height="130" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Columna vertebral central */}
          <line x1="55" y1="8" x2="55" y2="118" stroke="#c68642" strokeWidth="2" strokeLinecap="round"/>

          {/* Vértebras */}
          {[18, 31, 44, 57, 70, 83].map((y, i) => (
            <rect key={i} x="44" y={y} width="22" height="9" rx="2.5" fill="none" stroke="#c68642" strokeWidth="1.5"/>
          ))}

          {/* Silueta femenina */}
          {/* Cabeza */}
          <circle cx="76" cy="18" r="9" fill="none" stroke="#c68642" strokeWidth="1.5"/>
          {/* Cuello */}
          <line x1="76" y1="27" x2="76" y2="34" stroke="#c68642" strokeWidth="1.5"/>
          {/* Torso */}
          <path d="M 76 34 C 76 34 85 42 83 60 C 81 75 76 90 76 90" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Brazo derecho */}
          <path d="M 76 38 C 88 42 92 55 88 68" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Brazo izquierdo */}
          <path d="M 76 38 C 68 44 66 57 70 68" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Piernas */}
          <path d="M 76 90 C 74 100 72 110 70 120" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M 76 90 C 78 100 80 110 82 120" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* Destellos */}
          <path d="M 30 20 L 34 24 L 30 28" stroke="#c68642" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="24" y1="14" x2="28" y2="18" stroke="#c68642" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="34" y1="10" x2="34" y2="15" stroke="#c68642" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="26" y1="28" x2="30" y2="28" stroke="#c68642" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(42px, 8vw, 64px)',
          fontWeight: 700,
          color: '#5c3d1e',
          letterSpacing: '-1px',
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        Quiropraxia
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        style={{
          fontSize: 'clamp(17px, 3vw, 22px)',
          color: '#7a5230',
          maxWidth: 520,
          lineHeight: 1.5,
          marginBottom: 28,
          fontWeight: 400,
        }}
      >
        Detectamos, analizamos y corregimos subluxaciones vertebrales para mejorar
        tu calidad de vida
      </motion.p>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          fontSize: 'clamp(14px, 2.5vw, 17px)',
          color: '#8b6330',
          maxWidth: 560,
          lineHeight: 1.7,
          marginBottom: 44,
        }}
      >
        La quiropraxia es una ciencia que detecta, analiza y corrige subluxaciones
        vertebrales. Al alinear la columna liberamos el sistema nervioso para que
        funcione de manera óptima. Apta para todas las edades, hombres y mujeres.
      </motion.p>

      {/* Botón WhatsApp */}
      <motion.a
        href={`https://wa.me/${WA}?text=Hola%2C%20quiero%20reservar%20un%20turno`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 36px',
          borderRadius: 999,
          background: '#25d366',
          color: '#fff',
          fontWeight: 700,
          fontSize: 17,
          textDecoration: 'none',
          boxShadow: '0 8px 30px rgba(37,211,102,0.35)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1da851')}
        onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        Reservar Turno por WhatsApp
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.45 }}
      >
        <span style={{ fontSize: 12, color: '#8b6330', letterSpacing: 1, textTransform: 'uppercase' }}>Ver más</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 6.5L9 11.5L14 6.5" stroke="#8b6330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
