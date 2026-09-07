import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolio, workKinds, type WorkKind, type WorkPiece } from '../data/portfolio'

export function WorksPage() {
  const [filter, setFilter] = useState<WorkKind | 'all'>('all')
  const [active, setActive] = useState<WorkPiece | null>(null)
  const reduce = useReducedMotion()

  const list = useMemo(() => {
    if (filter === 'all') return portfolio
    return portfolio.filter((item) => item.kind === filter)
  }, [filter])

  useEffect(() => {
    if (!active) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="work-page">
      <div className="work-intro">
        <p className="float-kicker">Archive</p>
        <h1>All of the work</h1>
        <p>
          Catalogues, binders, marks, stationery, and social — the live files
          from the studio desk, not placeholder case studies.
        </p>
      </div>

      <div className="work-filters" role="group" aria-label="Filter work">
        {workKinds.map((kind) => (
          <button
            key={kind.id}
            type="button"
            className="work-chip"
            aria-pressed={filter === kind.id}
            onClick={() => setFilter(kind.id)}
          >
            {kind.label}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {list.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            className={`work-shot span-${item.span}`}
            onClick={() => setActive(item)}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.03, 0.4),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img src={item.src} alt={item.title} loading="lazy" decoding="async" />
            <span className="work-cap">
              <span>{item.client}</span>
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button type="button" className="lightbox-close" onClick={() => setActive(null)}>
            Close
          </button>
          <img src={active.src} alt={active.title} onClick={(event) => event.stopPropagation()} />
          <p className="lightbox-meta">
            {active.client} · {active.title}
          </p>
        </div>
      ) : null}
    </section>
  )
}
