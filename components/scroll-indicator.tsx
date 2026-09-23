'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function ScrollIndicator() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
        Scroll to explore
      </p>
      <span className="relative h-8 w-px overflow-hidden bg-white/15">
        <motion.span
          className="absolute inset-x-0 top-0 h-3 bg-[var(--warm)]"
          animate={reduce ? undefined : { y: [ -12, 32 ] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
    </div>
  )
}
