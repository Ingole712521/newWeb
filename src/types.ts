export type NavId =
  | 'home'
  | 'works'
  | 'about'
  | 'blog'
  | 'category'
  | 'video'
  | 'app'
  | 'contact'

export type PerspectiveId =
  | 'mark'
  | 'stationery'
  | 'print'
  | 'space'
  | 'digital'
  | 'apparel'
  | 'motion'
  | 'photography'

export type TileSpan = 'sm' | 'logo' | 'tall' | 'phone' | 'book'

export type ArtKind =
  | 'pamphlet'
  | 'wordmark'
  | 'talent'
  | 'phones'
  | 'brandbook'
  | 'signage'
  | 'packaging'
  | 'uniform'
  | 'wayfinding'
  | 'social'
  | 'reel'

export type WorkTile = {
  id: string
  span: TileSpan
  art: ArtKind
  alt: string
  /** Drop a file in /public/work and set this path, e.g. /work/silver-mark.jpg */
  image?: string
  caption?: string
}

export type Work = {
  slug: string
  client: string
  sector: string
  year: string
  location: string
  summary: string
  brief: string
  featured: boolean
  perspectives: PerspectiveId[]
  tiles: WorkTile[]
  outcomes: { label: string; value: string }[]
}

export type Article = {
  slug: string
  title: string
  dek: string
  date: string
  minutes: number
  topic: string
  body: string[]
}

export type Category = {
  id: PerspectiveId
  title: string
  lead: string
}

export type Film = {
  id: string
  title: string
  client: string
  duration: string
  kind: string
}
