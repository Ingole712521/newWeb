import { films } from '../data/studio'

export function VideoPage() {
  return (
    <section className="page">
      <p className="page-kicker">Motion</p>
      <h1 className="page-title">Video</h1>
      <p className="page-lead">
        Idents, site diaries, and silent lobby loops. Films sit with the case
        studies they belong to — not on a separate mood reel.
      </p>

      <div className="films section-gap">
        {films.map((film) => (
          <article className="film" key={film.id}>
            <div className="film-stage" aria-hidden="true">
              <div className="play">
                <PlayIcon />
              </div>
            </div>
            <div className="film-copy">
              <div>
                <h2>{film.title}</h2>
                <p>
                  {film.client} · {film.kind}
                </p>
              </div>
              <span>{film.duration}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 3.5v9l8-4.5-8-4.5Z" />
    </svg>
  )
}
