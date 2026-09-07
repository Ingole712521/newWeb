import { useEffect, useId, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { studio } from '../../data/studio'
import '../../styles/site.css'

export function SiteFrame() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const drawerId = useId()
  const home = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('is-home', home)
    return () => {
      document.documentElement.classList.remove('is-home')
    }
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className={home ? 'site site-home' : 'site'}>
      <header className="site-nav">
        <Link to="/" className="site-brand">
          360 Branding
        </Link>

        <nav className="site-links" aria-label="Primary">
          <NavLink to="/work" className="site-link">
            Work
          </NavLink>
        </nav>

        <div className="site-end">
          <a className="site-talk" href={`mailto:${studio.email}`}>
            Talk
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <div className="drawer" hidden={!open} onClick={() => setOpen(false)}>
        <div
          id={drawerId}
          className="drawer-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(event) => event.stopPropagation()}
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/work">Work</NavLink>
          <a href={`mailto:${studio.email}`}>Talk</a>
        </div>
      </div>
    </div>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" />
      )}
    </svg>
  )
}
