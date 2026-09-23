import { projects } from '../data/projects'
import { ProjectCard } from './project-card'

export function SelectedWork() {
  return (
    <section id="work" className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
        Selected work / 01—04
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-[-0.04em] md:text-6xl">
        Selected work
      </h2>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
