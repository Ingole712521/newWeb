import { projects } from '../../data/projects'
import { ProjectCard } from '../../components/project-card'

export default function WorkPage() {
  return (
    <main className="px-6 pb-24 pt-28 md:px-12 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Archive</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-[-0.04em] md:text-7xl">
        Selected work
      </h1>
      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}
