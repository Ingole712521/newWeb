import { designSkills, softwareSkills } from '../data/experience'

export function Skills() {
  return (
    <section className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-16">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Design</p>
          <ul className="mt-6">
            {designSkills.map((item) => (
              <li key={item} className="border-b border-white/10 py-3 font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Software</p>
          <ul className="mt-6">
            {softwareSkills.map((item) => (
              <li key={item} className="border-b border-white/10 py-3 font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
