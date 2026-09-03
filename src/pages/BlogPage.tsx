import { Link } from 'react-router-dom'
import { articles } from '../data/studio'

export function BlogPage() {
  return (
    <section className="page">
      <p className="page-kicker">Notes</p>
      <h1 className="page-title">Blog</h1>
      <p className="page-lead">
        Short notes from the studio on type, kit, wayfinding, and how work
        actually gets printed.
      </p>

      <div className="blog-list section-gap">
        {articles.map((article) => (
          <Link key={article.slug} to={`/blog/${article.slug}`} className="blog-row">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <div>
              <h2>{article.title}</h2>
              <p>{article.dek}</p>
            </div>
            <span className="mins">{article.minutes} min</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}
