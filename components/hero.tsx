'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { studio } from '../data/experience'
import { CropMarks } from './crop-marks'
import { HeroCollage } from './hero-collage'
import { MagneticButton } from './magnetic-button'
import { ScrollIndicator } from './scroll-indicator'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[var(--background)]">
      <CropMarks />
      <div className="relative grid min-h-svh lg:grid-cols-[minmax(20rem,46%)_minmax(0,1fr)]">
        <div className="relative z-[3] flex flex-col justify-center px-6 pb-28 pt-24 md:px-12 lg:px-16 lg:pt-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Graphic designer
            </p>
            <h1 className="mt-4 font-display text-[clamp(4rem,8vw,9rem)] font-bold uppercase leading-[0.84] tracking-[-0.06em] text-[var(--warm)]">
              Graphic
              <br />
              designer
            </h1>
            <p className="hero-services mt-3 font-display text-[clamp(1.35rem,3.4vw,3.4rem)] font-light uppercase leading-none tracking-[-0.04em]">
              Branding / Print / Digital
            </p>
            <p className="mt-6 max-w-[26rem] text-[15px] leading-[1.6] text-[#B5B2AB]">
              I create visual identities, print materials and digital experiences that help brands look better, communicate clearer and leave a lasting impression.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <MagneticButton href="/work/">View selected work</MagneticButton>
              <MagneticButton href={`mailto:${studio.email}`} variant="ghost">
                Let's talk
              </MagneticButton>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-10 left-0 hidden overflow-hidden md:block" aria-hidden="true">
            <p className="hero-crop-word">DES</p>
          </div>

          <div className="absolute bottom-6 left-[13.5rem] hidden items-end gap-3 sm:flex" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--magenta)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--yellow)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--warm)]" />
            <p className="ml-1 font-mono text-[9px] uppercase leading-snug tracking-[0.18em] text-[var(--muted)]">
              Print
              <br />
              Branding
              <br />
              Digital
            </p>
          </div>

          <p className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)] md:left-12 lg:left-16">
            © 2025 Ravindra Soyam
          </p>
        </div>

        <HeroCollage />
      </div>

      <ScrollIndicator />
      <p className="absolute bottom-6 right-6 z-10 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--muted)] md:right-12">
        Portfolio
      </p>
    </section>
  )
}
