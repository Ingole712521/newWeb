import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, works } from '../data/studio'
import { WorkTileCard } from '../components/work/WorkTileCard'
import type { PerspectiveId } from '../types'

export function WorksPage() {
  const [filter, setFilter] = useState<PerspectiveId | 'all'>('all')

  const list = useMemo(() => {
    if (filter === 'all') return works
    return works.filter((work) => work.perspectives.includes(filter))
  }, [filter])

  return (
    <section className="page">
      <p className="page-kicker">Archive</p>
      <h1 className="page-title">Works</h1>
      <p className="page-lead">
        Identity systems photographed as they live: literature, kit, rooms, and
        screens — not isolated marks.
      </p>

      <div className="chips" role="group" aria-label="Filter by perspective">
        <button
          type="button"
          className="chip"
          aria-pressed={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className="chip"
            aria-pressed={filter === category.id}
            onClick={() => setFilter(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid-works section-gap">
        {list.map((work) => {
          const tile = work.tiles[0]
          return (
            <Link key={work.slug} to={`/works/${work.slug}`} className="work-card">
              <WorkTileCard
                tile={tile}
                wordmark={work.client.split(' ')[0]?.toUpperCase()}
              />
              <div className="work-meta">
                <h2>{work.client}</h2>
                <p>
                  {work.sector} · {work.year} · {work.location}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
