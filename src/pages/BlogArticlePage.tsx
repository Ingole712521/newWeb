import { Link, Navigate, useParams } from 'react-router-dom'
import { articleBySlug } from '../data/studio'

export function BlogArticlePage() {
  const { slug } = useParams()
  const article = slug ? articleBySlug(slug) : undefined

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article className="page">
      <p className="page-kicker">
        {article.topic} · {article.minutes} min
      </p>
      <h1 className="page-title">{article.title}</h1>
      <p className="page-lead">{article.dek}</p>
      <div className="prose section-gap">
        {article.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="section-gap">
        <Link to="/blog" className="ghost">
          All notes
        </Link>
      </p>
    </article>
  )
}
