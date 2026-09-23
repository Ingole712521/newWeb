import { experience } from '../data/experience'

export function Experience() {
  return (
    <section className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-[-0.04em] md:text-5xl">
        Studio years
      </h2>
      <ol className="mt-12 max-w-3xl">
        {experience.map((role) => (
          <li
            key={role.company + role.dates}
            className="grid gap-2 border-b border-white/10 py-6 md:grid-cols-[11rem_1fr] md:gap-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{role.dates}</p>
            <div>
              <p className="font-display text-2xl font-bold tracking-[-0.03em]">{role.company}</p>
              <p className="mt-1 text-sm text-[#B5B2AB]">{role.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
