'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Tape } from './tape'

type Props = {
  className?: string
  rotate?: number
  depth?: number
  tape?: 'tl' | 'tr' | 'both' | 'none'
  children: ReactNode
}

export function PaperCard({
  className = '',
  rotate = 0,
  depth = 3,
  tape = 'none',
  children,
}: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={`paper-card ${className}`}
      style={{ rotate, zIndex: depth }}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.18 + depth * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.35 } }}
    >
      {(tape === 'tl' || tape === 'both') && <Tape className="tape-tl" />}
      {(tape === 'tr' || tape === 'both') && <Tape className="tape-tr" />}
      {children}
    </motion.article>
  )
}
