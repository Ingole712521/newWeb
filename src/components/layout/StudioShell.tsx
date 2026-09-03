import { useEffect, useId, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navItems, studio } from '../../data/studio'
import { SmoothScroll } from '../../lib/SmoothScroll'
import { Logo } from '../brand/Logo'
import '../../styles/studio.css'

export function StudioShell() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const drawerId = useId()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link to="/" className="brand" aria-label={studio.name}>
          <Logo className="brand-mark" />
          <span className="brand-name">
            360 Branding
            <br />
            Studio
          </span>
        </Link>

        <div className="sidebar-hero">
          {location.pathname === '/' ? (
            <h1>
              <strong>{studio.heroLead}</strong> {studio.heroRest}
            </h1>
          ) : (
            <p>
              <strong>{studio.heroLead}</strong> {studio.heroRest}
            </p>
          )}
        </div>

        <div className="talk">
          <span>Let&apos;s talk</span>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
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

          <nav className="nav-cluster" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                end={item.to === '/'}
                className="nav-link"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/works/silver-pumps" className="cta">
            Gothrough
          </Link>
        </header>

        <SmoothScroll>
          <Outlet />
        </SmoothScroll>
      </div>

      <div
        className="drawer"
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div
          id={drawerId}
          className="drawer-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(event) => event.stopPropagation()}
        >
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
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
