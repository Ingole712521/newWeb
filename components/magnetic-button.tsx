'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  href: string
  children: string
  variant?: 'solid' | 'ghost'
}

export function MagneticButton({ href, children, variant = 'solid' }: Props) {
  const reduce = useReducedMotion()
  const className =
    variant === 'solid'
      ? 'inline-flex items-center gap-3 bg-[var(--warm)] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--background)]'
      : 'inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--warm)] underline decoration-1 underline-offset-[6px]'

  const inner = (
    <>
      {children}
      <ArrowRight size={14} strokeWidth={1.6} />
    </>
  )

  if (href.startsWith('mailto:')) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={reduce ? undefined : { x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={reduce ? undefined : { x: 3 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={className}>
        {inner}
      </Link>
    </motion.div>
  )
}
