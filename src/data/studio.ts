import type { Article, Category, Film, NavId, Work } from '../types'
import { aglWorkImages } from './aglStage'

export const studio = {
  name: '360 Branding Studio',
  email: 'info@360brandingstudio.com',
  phone: '+91 22 4012 3600',
  address: 'Bandra West, Mumbai',
  hours: 'Mon–Fri, 10:00–19:00 IST',
  instagram: 'https://instagram.com/360brandingstudio',
  heroLead: 'We are',
  heroRest:
    'Creative Branding agency, crafting identity solutions for corporate brands and architectural spaces.',
} as const

export const navItems: { id: NavId; label: string; to: string }[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'works', label: 'Works', to: '/works' },
  { id: 'about', label: 'About', to: '/about' },
  { id: 'blog', label: 'Blog', to: '/blog' },
  { id: 'category', label: 'Category', to: '/category' },
  { id: 'video', label: 'Video', to: '/video' },
  { id: 'app', label: 'App Download', to: '/app' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

export const categories: Category[] = [
  {
    id: 'mark',
    title: 'Identity systems',
    lead: 'Marks, wordmarks, colour, and type that hold together on a visiting card and on a façade.',
  },
  {
    id: 'stationery',
    title: 'Stationery',
    lead: 'Letterheads, envelopes, compliments slips — the first physical handshake.',
  },
  {
    id: 'print',
    title: 'Print & publications',
    lead: 'Brand books, catalogues, and sales literature with a clear hierarchy.',
  },
  {
    id: 'space',
    title: 'Architectural spaces',
    lead: 'Wayfinding, façades, and interiors that carry the brand into the building.',
  },
  {
    id: 'digital',
    title: 'Digital & social',
    lead: 'Screens, feeds, and product UI that keep the same voice as the printed system.',
  },
  {
    id: 'apparel',
    title: 'Apparel & kit',
    lead: 'Uniforms, merch, and sports kit treated as wearable identity, not leftover logos.',
  },
  {
    id: 'motion',
    title: 'Motion',
    lead: 'Idents, launch films, and silent loops for lobbies and reels.',
  },
  {
    id: 'photography',
    title: 'Photography',
    lead: 'Talent, product, and space photography directed to the same colour and crop rules.',
  },
]

export const works: Work[] = [
  {
    slug: 'agl',
    client: 'AGL',
    sector: 'Ceramics',
    year: '2026',
    location: 'Morbi',
    featured: true,
    summary:
      'Collection catalogues and sample binders for a tile house — photographed as objects a dealer can actually hold.',
    brief:
      'AGL needed literature that reads as product, not as a PDF on a screen. We designed collection books and sample binders for Double Charge, Glifo, Signature, Marblex, and the rest of the 2026 line, then shot them on the desk they live on.',
    perspectives: ['print', 'stationery', 'photography'],
    outcomes: [
      { label: 'Collections', value: '12+' },
      { label: 'Binders', value: '4 systems' },
      { label: 'Year', value: '2026' },
    ],
    tiles: [
      {
        id: 'double',
        span: 'book',
        art: 'brandbook',
        alt: 'AGL double-charge catalogue mockup',
        image: aglWorkImages.double001,
        caption: 'Double Charge',
      },
      {
        id: 'glifo',
        span: 'sm',
        art: 'pamphlet',
        alt: 'Glifo collection catalogue',
        image: aglWorkImages.glifo,
        caption: 'Glifo',
      },
      {
        id: 'signature',
        span: 'tall',
        art: 'brandbook',
        alt: 'AGL Signature catalogue',
        image: aglWorkImages.signature,
        caption: 'Signature',
      },
      {
        id: 'fresco',
        span: 'phone',
        art: 'brandbook',
        alt: 'Fresco Rizon collection 2026',
        image: aglWorkImages.fresco,
        caption: 'Fresco Rizon',
      },
      {
        id: 'binder',
        span: 'logo',
        art: 'packaging',
        alt: 'Fiona Greige Trivera sample binder',
        image: aglWorkImages.binderFiona,
        caption: 'Sample binder',
      },
    ],
  },
  {
    slug: 'silver-pumps',
    client: 'Silver Pumps & Motors',
    sector: 'Industrial',
    year: '2025',
    location: 'Rajkot',
    featured: false,
    summary:
      'A full identity for a pump manufacturer: mark, kit, literature, social, and the people who wear it.',
    brief:
      'Silver needed to look as precise as the machines they ship. We rebuilt the mark around a single drop-and-impeller lockup, then carried it through catalogues, dealer boards, jerseys, and a phone-first social system — not a logo drop on white.',
    perspectives: [
      'mark',
      'print',
      'digital',
      'apparel',
      'photography',
      'stationery',
    ],
    outcomes: [
      { label: 'Touchpoints', value: '42' },
      { label: 'Dealer kits', value: '18 cities' },
      { label: 'Launch', value: 'Q2 2025' },
    ],
    tiles: [
      {
        id: 'pamphlet',
        span: 'sm',
        art: 'pamphlet',
        alt: 'Folded Silver product pamphlet on a light desk',
        caption: 'Product pamphlet',
      },
      {
        id: 'mark',
        span: 'logo',
        art: 'wordmark',
        alt: 'Silver Pumps & Motors wordmark on a pale field',
        caption: 'Primary lockup',
      },
      {
        id: 'talent',
        span: 'tall',
        art: 'talent',
        alt: 'Campaign portrait in Silver kit beside printed collateral',
        caption: 'Talent & kit',
      },
      {
        id: 'phones',
        span: 'phone',
        art: 'phones',
        alt: 'Phone mockup of Silver social stories and feed',
        caption: 'Social system',
      },
      {
        id: 'book',
        span: 'book',
        art: 'brandbook',
        alt: 'Open Silver brand book spread',
        caption: 'Brand book',
      },
    ],
  },
  {
    slug: 'atelier-north',
    client: 'Atelier North',
    sector: 'Architecture',
    year: '2024',
    location: 'Ahmedabad',
    featured: false,
    summary:
      'A quiet identity for a practice that designs museums and civic halls — type, wayfinding, and site boards.',
    brief:
      'The practice already had a strong drawing language. We gave it a public face: a condensed wordmark, a stone-and-ink palette, and a wayfinding family that reads at 8mm on a drawing and at 800mm on a wall.',
    perspectives: ['mark', 'space', 'print', 'stationery', 'photography'],
    outcomes: [
      { label: 'Sites signed', value: '6' },
      { label: 'Type sizes', value: '11' },
      { label: 'Year', value: '2024' },
    ],
    tiles: [
      {
        id: 'way',
        span: 'logo',
        art: 'wayfinding',
        alt: 'Atelier North wayfinding board in a lobby',
        caption: 'Lobby wayfinding',
      },
      {
        id: 'sign',
        span: 'sm',
        art: 'signage',
        alt: 'Façade signage study',
        caption: 'Façade',
      },
    ],
  },
  {
    slug: 'harbour-line',
    client: 'Harbour Line',
    sector: 'Hospitality',
    year: '2025',
    location: 'Kochi',
    featured: false,
    summary:
      'A harbour hotel identity that lives on keys, menus, uniforms, and the corridor lighting plan.',
    brief:
      'Guests meet the brand at the jetty, not on Instagram. We designed from the key-tag outward: a navy-and-salt palette, a custom numeral set for room numbers, and menus that match the dinner lighting.',
    perspectives: ['mark', 'space', 'apparel', 'print', 'digital'],
    outcomes: [
      { label: 'Keys & rooms', value: '84' },
      { label: 'Menu families', value: '4' },
      { label: 'Year', value: '2025' },
    ],
    tiles: [
      {
        id: 'pack',
        span: 'book',
        art: 'packaging',
        alt: 'Harbour Line amenity set',
        caption: 'Amenity set',
      },
    ],
  },
  {
    slug: 'veld-roastery',
    client: 'Veld Roastery',
    sector: 'F&B',
    year: '2024',
    location: 'Pune',
    featured: false,
    summary:
      'Packaging, cups, and a shopfront system for a roastery that sells by origin, not by vibe.',
    brief:
      'Each origin needed its own colour without breaking the family. We built a label architecture: origin, process, and roast as three fixed fields, then applied it to 250g bags, cups, and the window vinyl.',
    perspectives: ['mark', 'print', 'space', 'digital', 'photography'],
    outcomes: [
      { label: 'SKUs', value: '27' },
      { label: 'Cafés', value: '3' },
      { label: 'Year', value: '2024' },
    ],
    tiles: [
      {
        id: 'bag',
        span: 'sm',
        art: 'packaging',
        alt: 'Veld coffee bags on a counter',
        caption: 'Origin bags',
      },
    ],
  },
  {
    slug: 'kova-kit',
    client: 'Kova Athletics',
    sector: 'Sport',
    year: '2025',
    location: 'Bengaluru',
    featured: false,
    summary:
      'A kit system for a running club: jersey, number, and a race-day social template.',
    brief:
      'The club raced in borrowed shirts. We designed a two-colour kit, a number font that survives sweat, and a race-day story template the captain can fill on a phone.',
    perspectives: ['apparel', 'mark', 'digital', 'photography', 'motion'],
    outcomes: [
      { label: 'Kit pieces', value: '9' },
      { label: 'Members', value: '1,200' },
      { label: 'Year', value: '2025' },
    ],
    tiles: [
      {
        id: 'kit',
        span: 'tall',
        art: 'uniform',
        alt: 'Kova race jersey',
        caption: 'Race jersey',
      },
    ],
  },
  {
    slug: 'civic-metro',
    client: 'Metro Civic Board',
    sector: 'Public',
    year: '2023',
    location: 'Surat',
    featured: false,
    summary:
      'A civic identity for a metro information programme — posters, platform screens, and a downloadable map app.',
    brief:
      'Clarity over personality. We designed a pictogram set, a map colour logic, and screen templates that work under platform lights.',
    perspectives: ['mark', 'space', 'digital', 'motion', 'print'],
    outcomes: [
      { label: 'Stations', value: '22' },
      { label: 'Pictograms', value: '64' },
      { label: 'Year', value: '2023' },
    ],
    tiles: [
      {
        id: 'reel',
        span: 'phone',
        art: 'reel',
        alt: 'Metro Civic screen loop',
        caption: 'Platform loop',
      },
    ],
  },
]

export const articles: Article[] = [
  {
    slug: 'identity-is-a-building',
    title: 'Identity is a building, not a stamp',
    dek: 'Why we start with the wall, the kit, and the invoice — then draw the mark.',
    date: '2026-06-12',
    minutes: 7,
    topic: 'Practice',
    body: [
      'A logo that only works on a white square is unfinished. Most of our clients live on corrugated shutters, fluorescent dealer boards, and cotton jerseys. We start there.',
      'For Silver Pumps we photographed the factory floor before we drew a drop. The impeller geometry, the oil blue on the overalls, the stacked cartons — those became the system. The wordmark arrived last, as a summary, not a beginning.',
      'If you are briefing a studio, send the room. Send the uniform. Send the worst print condition you have. That is the real canvas.',
    ],
  },
  {
    slug: 'wayfinding-before-instagram',
    title: 'Wayfinding before Instagram',
    dek: 'Architectural clients do not need a grid. They need a person to find the lift.',
    date: '2026-03-04',
    minutes: 5,
    topic: 'Space',
    body: [
      'Feeds reward contrast and crop. Corridors reward contrast and distance. Those are different jobs, even when they share a typeface.',
      'Atelier North’s lobby letters are 90mm cap-height, painted, not vinyl. The Instagram crop of the same mark is a different drawing. We keep both files. We do not pretend they are one.',
    ],
  },
  {
    slug: 'kit-as-identity',
    title: 'Kit as identity',
    dek: 'A jersey is the most honest application you will ever design.',
    date: '2025-11-18',
    minutes: 6,
    topic: 'Apparel',
    body: [
      'Cloth stretches. Numbers peel. Sponsors arrive late. If the mark still reads after a monsoon match, the system is working.',
      'We spec print methods before we spec pantone. Plastisol on polyester is not the same as foil on a visiting card. Treat them as separate crafts that happen to share a name.',
    ],
  },
]

export const films: Film[] = [
  {
    id: 'silver-launch',
    title: 'Silver — impeller',
    client: 'Silver Pumps & Motors',
    duration: '00:42',
    kind: 'Launch ident',
  },
  {
    id: 'north-site',
    title: 'North — site diary',
    client: 'Atelier North',
    duration: '02:18',
    kind: 'Process film',
  },
  {
    id: 'harbour-keys',
    title: 'Harbour — keys',
    client: 'Harbour Line',
    duration: '00:28',
    kind: 'Silent lobby loop',
  },
  {
    id: 'kova-race',
    title: 'Kova — gun lap',
    client: 'Kova Athletics',
    duration: '01:05',
    kind: 'Race-day cut',
  },
]

export const processSteps = [
  {
    title: 'Audit the room',
    text: 'We walk the factory, the hotel, or the studio. Photographs of real conditions beat a moodboard.',
  },
  {
    title: 'Name the jobs',
    text: 'Invoice, façade, jersey, app icon — each is a different drawing. We list them before we draw.',
  },
  {
    title: 'Build the kit',
    text: 'Type, colour, mark, and rules that survive the worst print and the smallest screen.',
  },
  {
    title: 'Apply, then photograph',
    text: 'We mock the applications, then shoot them. The case study is the work, not a decoration of it.',
  },
]

export function workBySlug(slug: string) {
  return works.find((work) => work.slug === slug)
}

export function articleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function worksByPerspective(id: string) {
  return works.filter((work) => work.perspectives.includes(id as Work['perspectives'][number]))
}
