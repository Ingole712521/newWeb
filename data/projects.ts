import { images } from '../lib/asset'

export type Project = {
  slug: string
  number: string
  title: string
  category: string
  year: string
  summary: string
  role: string
  challenge: string
  approach: string
  direction: string
  outcome: string
  deliverables: string[]
  tools: string[]
  cover: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'showroom-branding',
    number: '01',
    title: 'Showroom branding',
    category: 'Visual identity / Retail',
    year: '2025',
    summary: 'Visual communication for retail environments and dealer floors.',
    role: 'Graphic designer',
    challenge:
      'Tile showrooms needed graphics that read from the street and still hold up next to the product on the floor.',
    approach:
      'We designed from the wall outward: collection names, slab callouts, and promotional boards that match the catalogues in hand.',
    direction:
      'Quiet type, high-contrast photography, and a paper-led colour system so print and showroom share one voice.',
    outcome:
      'A set of showroom boards and collection graphics used across dealer spaces for the 2026 line.',
    deliverables: ['Signage', 'Promotional graphics', 'Visual communication', 'Print collateral'],
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    cover: images.signature,
    gallery: [images.signature, images.stonera, images.marblex],
  },
  {
    slug: 'product-catalogue',
    number: '02',
    title: 'Product catalogue',
    category: 'Print / Editorial',
    year: '2026',
    summary: 'Collection catalogues photographed as objects a dealer can hold.',
    role: 'Graphic designer',
    challenge:
      'Literature had to feel like product, not a PDF dropped onto coated stock.',
    approach:
      'Grid, type, and photography were built around actual slab sizes, then mocked and shot on the desk they live on.',
    direction:
      'Large collection titles, restrained captions, and a consistent cover architecture across Glifo, Fresco, Signature and the rest of the line.',
    outcome:
      'Printed catalogues for multiple 2026 collections, used in dealer kits.',
    deliverables: ['Catalogue design', 'Cover systems', 'Layout', 'Print production'],
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
    cover: images.fresco,
    gallery: [images.fresco, images.glifo, images.double001, images.mq],
  },
  {
    slug: 'branding-collateral',
    number: '03',
    title: 'Branding and marketing collateral',
    category: 'Identity / Print',
    year: '2025',
    summary: 'Sample binders, estimate pads, and brand literature that travel with the sales team.',
    role: 'Graphic designer',
    challenge:
      'The brand had to survive factory light, dealer bags, and the worst print condition on the route.',
    approach:
      'Binders and stationery were designed as a family: same type, same paper logic, different jobs.',
    direction:
      'Material photography, tight grids, and covers that read as sample objects rather than posters.',
    outcome:
      'Binder systems and printed pads used in dealer conversations.',
    deliverables: ['Sample binders', 'Estimate pads', 'Cover design', 'Brand literature'],
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    cover: images.binderFiona,
    gallery: [images.binderFiona, images.binderGlifo, images.mq],
  },
  {
    slug: 'digital-design',
    number: '04',
    title: 'Digital design',
    category: 'Digital / Social',
    year: '2025',
    summary: 'Feed and announcement graphics that keep the same voice as the printed system.',
    role: 'Graphic designer',
    challenge:
      'Social needed to look like the catalogues, not like a separate campaign language.',
    approach:
      'Type, crop, and colour were taken from the print kit and rebuilt for 1080 frames.',
    direction:
      'Bold type, product photography, and short claims that still feel like print.',
    outcome:
      'A working set of announcement and campaign posts for product launches.',
    deliverables: ['Social templates', 'Announcement posts', 'Campaign frames'],
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    cover: images.social1,
    gallery: [images.social1, images.social2, images.announcement],
  },
]

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
