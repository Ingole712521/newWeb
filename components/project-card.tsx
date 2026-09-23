'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()

  return (
    <Link href={`/work/${project.slug}/`} className="group relative block overflow-hidden bg-[var(--secondary)]">
      <motion.div
        className="relative aspect-[4/3] md:aspect-[16/10]"
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">{project.number}</p>
            <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[-0.03em] md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-h-0 overflow-hidden text-[12px] text-[#B5B2AB] opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">
              {project.category} · {project.year}
            </p>
          </div>
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--warm)] opacity-0 transition group-hover:opacity-100 md:inline-flex">
            View case study
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
