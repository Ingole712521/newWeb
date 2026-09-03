import { Link, Navigate, useParams } from 'react-router-dom'
import { categories, workBySlug } from '../data/studio'
import { WorkTileCard } from '../components/work/WorkTileCard'

const notes: Record<string, string> = {
  mark: 'Primary lockup, clear space, and colour. Drawn last, after the applications.',
  stationery: 'Letterheads, envelopes, and dealer visiting cards at real print sizes.',
  print: 'Catalogues, pamphlets, and the brand book spread you can hold.',
  space: 'Façade, lobby, and wayfinding at walking distance — not a render crop.',
  digital: 'Stories, feed, and product screens using the same type and colour rules.',
  apparel: 'Jerseys, overalls, and hospitality kit. Cloth is the honesty test.',
  motion: 'Idents and silent loops for launch and lobby.',
  photography: 'Talent, product, and site photographs directed to the system.',
}

export function WorkDetailPage() {
  const { slug } = useParams()
  const work = slug ? workBySlug(slug) : undefined

  if (!work) {
    return <Navigate to="/works" replace />
  }

  const word = work.client.split(' ')[0]?.toUpperCase()

  return (
    <article className="page">
      <p className="page-kicker">
        {work.sector} · {work.year} · {work.location}
      </p>
      <h1 className="page-title">{work.client}</h1>
      <p className="page-lead">{work.brief}</p>

      <div className="stats">
        {work.outcomes.map((item) => (
          <div className="stat" key={item.label}>
            <b>{item.value}</b>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="case-stage">
        {work.tiles.slice(0, 2).map((tile) => (
          <WorkTileCard key={tile.id} tile={{ ...tile, span: 'book' }} wordmark={word} />
        ))}
      </div>

      {work.tiles.length > 2 ? (
        <div className="case-stage">
          {work.tiles.slice(2).map((tile) => (
            <WorkTileCard key={tile.id} tile={{ ...tile, span: 'book' }} wordmark={word} />
          ))}
        </div>
      ) : null}

      <section className="section-gap">
        <p className="page-kicker">Every perspective</p>
        <h2 className="page-title">How the system shows up</h2>
        <dl className="perspectives">
          {work.perspectives.map((id) => {
            const label = categories.find((category) => category.id === id)?.title ?? id
            return (
              <div className="persp" key={id}>
                <dt>{label}</dt>
                <dd>{notes[id]}</dd>
              </div>
            )
          })}
        </dl>
      </section>

      <p className="section-gap">
        <Link to="/works" className="ghost">
          All works
        </Link>
      </p>
    </article>
  )
}
