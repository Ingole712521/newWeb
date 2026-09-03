import { Link } from 'react-router-dom'
import type { WorkTile } from '../../types'
import { MockArt } from './MockArt'

type Props = {
  tile: WorkTile
  to?: string
  wordmark?: string
  bento?: boolean
}

export function WorkTileCard({ tile, to, wordmark, bento = false }: Props) {
  const className = bento ? `tile span-${tile.span}` : 'tile'

  const inner = (
    <>
      <div className="tile-media">
        {tile.image ? (
          <img src={tile.image} alt={tile.alt} />
        ) : (
          <MockArt kind={tile.art} title={wordmark} />
        )}
      </div>
      {tile.caption ? <span className="tile-cap">{tile.caption}</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} aria-label={tile.alt}>
        {inner}
      </Link>
    )
  }

  return <div className={className}>{inner}</div>
}
