const WHATSAPP_NUMBER = '5491100000000' // Reemplazar con número real

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
      style={{
        background: 'linear-gradient(160deg, #fdf6ee 0%, #f5e6d3 50%, #eddcca 100%)',
      }}
    >
      {/* Logo SVG */}
      <div className="mb-8">
        <svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Quiropraxia"
        >
          {/* Columna vertebral */}
          <line x1="50" y1="10" x2="50" y2="110" stroke="#c68642" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="40" y="18" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <rect x="40" y="30" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <rect x="40" y="42" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <rect x="40" y="54" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <rect x="40" y="66" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <rect x="40" y="78" width="20" height="8" rx="2" fill="none" stroke="#c68642" strokeWidth="1.5" />
          {/* Silueta de figura humana */}
          <circle cx="68" cy="20" r="8" fill="none" stroke="#c68642" strokeWidth="1.5" />
          <path d="M 68 28 Q 75 50 70 85" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 68 35 Q 82 45 78 60" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 68 35 Q 58 45 62 60" stroke="#c68642" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Destellos */}
          <path d="M 30 15 L 33 18 L 30 21" stroke="#c68642" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M 26 10 L 28 13" stroke="#c68642" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 34 8 L 34 12" stroke="#c68642" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <h1
        className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        style={{ color: '#5c3d1e' }}
      >
        Quiropraxia
      </h1>

      <p
        className="text-xl md:text-2xl mb-6 max-w-xl leading-relaxed"
        style={{ color: '#7a5230' }}
      >
        Detectamos, analizamos y corregimos subluxaciones vertebrales para mejorar
        tu calidad de vida
      </p>

      <p
        className="text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
        style={{ color: '#8b6330' }}
      >
        La quiropraxia es una ciencia que detecta, analiza y corrige subluxaciones
        vertebrales. Al alinear la columna liberamos el sistema nervioso para que
        funcione de manera óptima. Apta para todas las edades, hombres y mujeres.
      </p>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20reservar%20un%20turno`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#25d366' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1da851')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25d366')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        Reservar Turno por WhatsApp
      </a>

      {/* Scroll indicator */}
      <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
        <span className="text-sm" style={{ color: '#8b6330' }}>Ver más</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#8b6330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
