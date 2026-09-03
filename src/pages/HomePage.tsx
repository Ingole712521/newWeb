import { Link } from 'react-router-dom'
import { works } from '../data/studio'
import { WorkTileCard } from '../components/work/WorkTileCard'

export function HomePage() {
  const featured = works.find((work) => work.featured) ?? works[0]

  return (
    <section aria-label="Featured work">
      <h2 className="sr-only">{featured.client}</h2>
      <div className="bento">
        {featured.tiles.map((tile) => (
          <WorkTileCard
            key={tile.id}
            tile={tile}
            to={`/works/${featured.slug}`}
            wordmark="SILVER"
            bento
          />
        ))}
      </div>
      <p className="sr-only">
        Featured case study:{' '}
        <Link to={`/works/${featured.slug}`}>{featured.client}</Link>
      </p>
    </section>
  )
}
