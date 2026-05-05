import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamiento', href: '#tratamiento' },
  { label: 'Preguntas', href: '#preguntas' },
]

const WHATSAPP_NUMBER = '5491100000000'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(253, 246, 238, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #e8d5be' : 'none',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-bold text-lg tracking-tight" style={{ color: '#5c3d1e' }}>
          Quiropraxia
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: '#7a5230' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#25d366' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1da851')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25d366')}
          >
            Reservar Turno
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="block w-5 h-0.5 rounded" style={{ background: '#5c3d1e', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
          <span className="block w-5 h-0.5 rounded" style={{ background: '#5c3d1e', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 rounded" style={{ background: '#5c3d1e', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(253, 246, 238, 0.97)', borderBottom: '1px solid #e8d5be' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium"
              style={{ color: '#7a5230' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-full text-white text-sm font-semibold text-center"
            style={{ backgroundColor: '#25d366' }}
          >
            Reservar Turno
          </a>
        </div>
      )}
    </nav>
  )
}
