import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Nosotros',    href: '#nosotros' },
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
            background: 'rgba(248,250,255,0.96)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #D0DCF0',
          }}
        >
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="#inicio" style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, color: '#1B3A6B', textDecoration: 'none' }}>
              Quiropraxia
            </a>

            <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
              {links.map(l => (
                <a key={l.href} href={l.href}
                  style={{ fontSize: 14, color: '#2D5AA0', textDecoration: 'none', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E8572A')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#2D5AA0')}
                >
                  {l.label}
                </a>
              ))}
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                style={{ padding: '8px 20px', borderRadius: 999, background: '#E8572A', color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#C94A20')}
                onMouseLeave={e => (e.currentTarget.style.background = '#E8572A')}
              >
                Reservar Turno
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              <div style={{ width: 22, height: 2, background: '#1B3A6B', borderRadius: 2, marginBottom: 5, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
              <div style={{ width: 22, height: 2, background: '#1B3A6B', borderRadius: 2, marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: 22, height: 2, background: '#1B3A6B', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden', borderTop: '1px solid #D0DCF0', background: 'rgba(248,250,255,0.98)' }}
              >
                <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {links.map(l => (
                    <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                      style={{ fontSize: 15, color: '#2D5AA0', textDecoration: 'none', fontWeight: 500 }}>
                      {l.label}
                    </a>
                  ))}
                  <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                    style={{ padding: '10px 0', borderRadius: 999, background: '#E8572A', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
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
