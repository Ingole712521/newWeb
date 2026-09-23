'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import type { MouseEvent, ReactNode } from 'react'
import { images } from '../lib/asset'
import { CmykStrip } from './cmyk-strip'
import { PaperCard } from './paper-card'

function Parallax({
  x,
  y,
  amount,
  className,
  children,
}: {
  x: ReturnType<typeof useMotionValue<number>>
  y: ReturnType<typeof useMotionValue<number>>
  amount: number
  className: string
  children: ReactNode
}) {
  const tx = useTransform(x, (v) => v * amount)
  const ty = useTransform(y, (v) => v * amount)
  return (
    <motion.div className={className} style={{ x: tx, y: ty }}>
      {children}
    </motion.div>
  )
}

export function HeroCollage() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 60, damping: 20 })
  const y = useSpring(my, { stiffness: 60, damping: 20 })

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 16)
    my.set(((event.clientY - rect.top) / rect.height - 0.5) * 12)
  }

  return (
    <div className="relative min-h-[34rem] w-full lg:min-h-svh" onMouseMove={onMove}>
      <Parallax x={x} y={y} amount={0.18} className="absolute left-[4%] top-[11%] w-[42%] max-w-[17rem]">
        <PaperCard rotate={-8} depth={2} tape="both" className="bg-[var(--paper)] p-3 text-[#171717]">
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.14em]">
            <span>Brand guidelines</span>
            <span>2024</span>
          </div>
          <p className="mt-1 text-[10px] text-[#5c5c56]">Visual identity and brand system</p>
          <div className="relative mt-2 h-40 overflow-hidden">
            <Image src={images.glifo} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="280px" />
          </div>
          <div className="mt-2 flex h-4">
            <span className="flex-1 bg-[#111]" />
            <span className="flex-1 bg-[var(--red)]" />
            <span className="flex-1 bg-[var(--cyan)]" />
            <span className="flex-1 bg-[var(--yellow)]" />
          </div>
        </PaperCard>
      </Parallax>

      <Parallax x={x} y={y} amount={0.1} className="absolute right-[9%] top-[7%] hidden sm:block">
        <p className="font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.04em] text-[var(--warm)]">
          Aa
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
          Space Grotesk
          <br />
          ExtraBold
        </p>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
          ABCDEFGHIJKLM
          <br />
          NOPQRSTUVWXYZ
          <br />
          0123456789
        </p>
      </Parallax>

      <p className="absolute right-4 top-[12%] hidden text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/35 lg:block">
        Type
        <br />
        Layout
        <br />
        Design
        <br />
        Print
      </p>

      <CmykStrip className="absolute right-4 top-[28%] hidden lg:flex" />

      <Parallax x={x} y={y} amount={0.45} className="absolute right-[2%] top-[22%] z-[8] w-28 rotate-[8deg]">
        <div className="bg-[#efe6d6] px-3 py-3 font-display text-[13px] font-bold leading-snug tracking-[-0.02em] text-[#1a1a1a] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
          <span className="tape tape-note" />
          Good design solves real problems
        </div>
      </Parallax>

      <Parallax x={x} y={y} amount={0.32} className="absolute left-[28%] top-[16%] z-[9]">
        <motion.div
          className="avatar-bust"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </Parallax>

      <Parallax x={x} y={y} amount={0.22} className="absolute left-[1%] top-[52%] w-[40%] max-w-[15rem]">
        <PaperCard rotate={-7} depth={3} className="overflow-hidden">
          <div className="relative h-36">
            <Image src={images.signature} alt="Showroom branding" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="260px" />
          </div>
          <p className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white drop-shadow">
            Showroom branding
          </p>
        </PaperCard>
      </Parallax>

      <Parallax x={x} y={y} amount={0.28} className="absolute right-[4%] top-[46%] z-[4] w-[34%] max-w-[13rem]">
        <PaperCard rotate={6} depth={4} className="overflow-hidden">
          <div className="relative h-52">
            <Image src={images.fresco} alt="Product catalogue" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="240px" />
          </div>
          <p className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white drop-shadow">
            Product catalogue
          </p>
        </PaperCard>
      </Parallax>

      <Parallax x={x} y={y} amount={0.5} className="absolute bottom-[8%] left-[16%] z-[3] w-[44%] max-w-[16rem]">
        <PaperCard rotate={4} depth={2} className="overflow-hidden">
          <div className="relative h-32">
            <Image src={images.mq} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="280px" />
          </div>
        </PaperCard>
      </Parallax>

      <Parallax x={x} y={y} amount={0.2} className="absolute bottom-[6%] right-[12%] z-[5] w-[38%] max-w-[15rem]">
        <PaperCard rotate={7} depth={5} tape="tr" className="bg-[#101010] p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">AGL</p>
          <p className="mt-1 font-display text-[1.15rem] font-extrabold leading-none tracking-[-0.03em]">
            Build better spaces
          </p>
          <div className="relative mt-3 h-28 overflow-hidden">
            <Image src={images.binderFiona} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="240px" />
          </div>
        </PaperCard>
      </Parallax>
    </div>
  )
}
