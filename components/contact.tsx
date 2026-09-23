import { studio } from '../data/experience'
import { MagneticButton } from './magnetic-button'

export function Contact() {
  return (
    <section className="border-t border-white/10 px-6 py-28 md:px-12 lg:px-16">
      <h2 className="max-w-3xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
        Let's make
        <br />
        something
        <br />
        worth seeing.
      </h2>
      <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[#B5B2AB]">
        Have a brand, product or idea that needs a stronger visual identity? Let's talk.
      </p>
      <div className="mt-8">
        <MagneticButton href={`mailto:${studio.email}`}>Start a project</MagneticButton>
      </div>
      <div className="mt-16 flex flex-wrap gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
        <a href={`mailto:${studio.email}`} className="text-[var(--warm)]">
          {studio.email}
        </a>
        <span>Portfolio / this site</span>
      </div>
    </section>
  )
}
