import { Link, useSearchParams } from 'react-router-dom'
import { categories, works, worksByPerspective } from '../data/studio'

export function CategoryPage() {
  const [params] = useSearchParams()
  const selected = params.get('id')
  const category = categories.find((item) => item.id === selected)
  const list = selected ? worksByPerspective(selected) : works

  return (
    <section className="page">
      <p className="page-kicker">Index</p>
      <h1 className="page-title">{category ? category.title : 'Category'}</h1>
      <p className="page-lead">
        {category
          ? category.lead
          : 'Browse the archive by how the work exists in the world — mark, print, room, screen, kit, film.'}
      </p>

      <div className="cat-grid section-gap">
        {categories.map((item) => (
          <Link key={item.id} to={`/category?id=${item.id}`} className="cat-card">
            <div>
              <h2>{item.title}</h2>
              <p>{item.lead}</p>
            </div>
          </Link>
        ))}
      </div>

      {selected ? (
        <div className="grid-works section-gap">
          {list.map((work) => (
            <Link key={work.slug} to={`/works/${work.slug}`} className="work-card">
              <div className="work-meta">
                <h2>{work.client}</h2>
                <p>{work.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  )
}
