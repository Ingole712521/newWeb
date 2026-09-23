import { processSteps } from '../data/experience'

export function Process() {
  return (
    <section className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Process</p>
      <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold uppercase tracking-[-0.04em] md:text-5xl">
        From brief to press
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li key={step.id} className="border-t border-white/15 pt-5">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">{step.id}</p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em]">{step.title}</h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-[#B5B2AB]">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
