import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Quiénes',     href: '#nosotros' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Beneficios',  href: '#beneficios' },
  { label: 'FAQ',         href: '#preguntas' },
]

const WA = '5492995502644'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            background: 'rgba(253,246,238,0.96)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #e8d5be',
          }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="#inicio" style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, color: '#5c3d1e', textDecoration: 'none', letterSpacing: '-0.3px' }}>
              Quiropraxia
            </a>

            {/* Desktop */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: 14, color: '#7a5230', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c68642')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a5230')}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                style={{ padding: '8px 20px', borderRadius: 999, background: '#25d366', color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1da851')}
                onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
              >
                Reservar Turno
              </a>
            </div>

            {/* Mobile hamburger */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              <div style={{ width: 22, height: 2, background: '#5c3d1e', borderRadius: 2, marginBottom: 5, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
              <div style={{ width: 22, height: 2, background: '#5c3d1e', borderRadius: 2, marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <div style={{ width: 22, height: 2, background: '#5c3d1e', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden', borderTop: '1px solid #e8d5be', background: 'rgba(253,246,238,0.98)' }}
              >
                <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {links.map(l => (
                    <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                      style={{ fontSize: 15, color: '#7a5230', textDecoration: 'none', fontWeight: 500 }}>
                      {l.label}
                    </a>
                  ))}
                  <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                    style={{ padding: '10px 0', borderRadius: 999, background: '#25d366', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
                    Reservar Turno
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
