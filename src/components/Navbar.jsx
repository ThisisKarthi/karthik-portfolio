import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Clients',    href: '#clients'    },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections  = document.querySelectorAll('section[id]')
    const observer  = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-logo">KM_portfolio</a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/Karthikeyan_ProductAnalyst_Resume_2.pdf" download className="nav-cta">
          <FiDownload size={12} style={{ marginRight: 4 }} /> Resume
        </a>

        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open
            ? <FiX   size={20} color="#f1f5f9" />
            : <FiMenu size={20} color="#8b98b1" />}
        </button>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a
          href="/Karthikeyan_ProductAnalyst_Resume_2.pdf"
          download
          style={{ color: 'var(--accent)' }}
          onClick={() => setOpen(false)}
        >
          ↓ Download Resume
        </a>
      </div>
    </>
  )
}
