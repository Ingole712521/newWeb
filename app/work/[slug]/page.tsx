import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projectBySlug, projects } from '../../../data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="px-6 pb-24 pt-28 md:px-12 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
        {project.number} / {project.year}
      </p>
      <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]">
        {project.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-[#B5B2AB]">{project.summary}</p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
        Role: {project.role}
      </p>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-[var(--secondary)]">
        <Image src={project.cover} alt={project.title} fill className="object-cover" sizes="100vw" priority />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <article>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Challenge</h2>
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[#B5B2AB]">{project.challenge}</p>
        </article>
        <article>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Approach</h2>
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[#B5B2AB]">{project.approach}</p>
        </article>
        <article>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Design direction</h2>
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[#B5B2AB]">{project.direction}</p>
        </article>
        <article>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Outcome</h2>
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-[#B5B2AB]">{project.outcome}</p>
        </article>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Deliverables</h2>
          <ul className="mt-4">
            {project.deliverables.map((item) => (
              <li key={item} className="border-b border-white/10 py-2 text-[15px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Tools</h2>
          <ul className="mt-4">
            {project.tools.map((item) => (
              <li key={item} className="border-b border-white/10 py-2 text-[15px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-3 md:grid-cols-2">
        {project.gallery.map((src) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden bg-[var(--secondary)]">
            <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>

      <Link
        href="/work/"
        className="mt-16 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]"
      >
        All work
      </Link>
    </main>
  )
}
