'use client'

import { Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
  const reduce = useReducedMotion()
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-40 px-6 pt-6 md:px-12 lg:px-16"
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--warm)]"
        >
          <span className="md:hidden">Ravindra</span>
          <span className="hidden md:inline">Ravindra Soyam</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          <Link
            href="/work/"
            className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
              path.startsWith('/work') ? 'text-[var(--warm)]' : 'text-[var(--muted)]'
            }`}
          >
            Work
          </Link>
          <Link
            href="/contact/"
            className="inline-flex h-9 items-center rounded-full border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--warm)]"
          >
            Talk
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center border border-white/20 text-[var(--warm)] md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
          <span className="sr-only">{open ? 'Close menu' : 'Menu'}</span>
        </button>
      </div>

      {open ? (
        <div className="pointer-events-auto mt-4 border border-white/15 bg-[var(--background)] p-5 md:hidden">
          <Link href="/work/" className="block py-3 font-mono text-xs uppercase tracking-[0.18em]" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/about/" className="block py-3 font-mono text-xs uppercase tracking-[0.18em]" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact/" className="block py-3 font-mono text-xs uppercase tracking-[0.18em]" onClick={() => setOpen(false)}>
            Talk
          </Link>
        </div>
      ) : null}
    </motion.header>
  )
}
