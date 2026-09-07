import { publicAsset } from '../lib/publicAsset'

export type WorkKind =
  | 'catalogue'
  | 'binder'
  | 'packaging'
  | 'mark'
  | 'social'
  | 'stationery'

export type WorkPiece = {
  id: string
  src: string
  title: string
  client: string
  kind: WorkKind
  span: 'wide' | 'tall' | 'square'
}

export const workKinds: { id: WorkKind | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'catalogue', label: 'Catalogues' },
  { id: 'binder', label: 'Binders' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'mark', label: 'Marks' },
  { id: 'social', label: 'Social' },
  { id: 'stationery', label: 'Stationery' },
]

function piece(
  id: string,
  path: string,
  title: string,
  client: string,
  kind: WorkKind,
  span: WorkPiece['span'] = 'square',
): WorkPiece {
  return { id, src: publicAsset(path), title, client, kind, span }
}

export const portfolio: WorkPiece[] = [
  piece('cat-double-001', '/Catalogue/AGL Work/double charge mockup 001.jpg', 'Double Charge', 'AGL', 'catalogue', 'wide'),
  piece('cat-glifo', '/Catalogue/AGL Work/Glifo mockup 01.jpg', 'Glifo', 'AGL', 'catalogue', 'tall'),
  piece('cat-signature', '/Catalogue/AGL Work/SIGNATURE MOCKUP 01.jpg', 'Signature', 'AGL', 'catalogue', 'square'),
  piece('cat-grandura', '/Catalogue/AGL Work/Grandura mockup copy.jpg', 'Grandura', 'AGL', 'catalogue', 'wide'),
  piece('cat-fresco', '/Catalogue/AGL Work/FRESCO RIZON COLLECTION - 2026 mockup copy.jpg', 'Fresco Rizon 2026', 'AGL', 'catalogue', 'tall'),
  piece('cat-mq', '/Catalogue/AGL Work/M&Q MOCKUP copy.jpg', 'M&Q', 'AGL', 'catalogue', 'square'),
  piece('cat-stonera', '/Catalogue/AGL Work/StonEra - 1600x3200 - 2026 mockup copy.jpg', 'StonEra 1600×3200', 'AGL', 'catalogue', 'wide'),
  piece('cat-hyusora', '/Catalogue/AGL Work/HYUSORA - VIARO - ALVARO - 600x1200 - 2026 mockup copy.jpg', 'Hyusora / Viaro / Alvaro', 'AGL', 'catalogue', 'square'),
  piece('cat-marblex-slab', '/Catalogue/AGL Work/MARBLEX - 1200x1800 -Trivera_Fiona_Cerena_Griege_Marblex - 2026 mockup copy.jpg', 'Marblex 1200×1800', 'AGL', 'catalogue', 'tall'),
  piece('cat-marblex-plank', '/Catalogue/AGL Work/MARBLEX - 800x3000 - 800x2400 - 2026 mockup copy.jpg', 'Marblex 800 planks', 'AGL', 'catalogue', 'wide'),
  piece('cat-prescio', '/Catalogue/AGL Work/PRESCIO & RENOVO - 800x1600 - 800x1200 - 2026 mockup copy.jpg', 'Prescio & Renovo', 'AGL', 'catalogue', 'square'),
  piece('cat-silmgres', '/Catalogue/AGL Work/SILMGRES - 1200x2800 - 2026 mockup copy.jpg', 'Silmgres 1200×2800', 'AGL', 'catalogue', 'tall'),
  piece('cat-textura', '/Catalogue/AGL Work/TEXTURA COLLECTION - 2026 mockup copy.jpg', 'Textura 2026', 'AGL', 'catalogue', 'square'),
  piece('cat-tuff', '/Catalogue/AGL Work/TUFFGUARD - 600x600 - 2026 mockup copy.jpg', 'Tuffguard 600', 'AGL', 'catalogue', 'square'),
  piece('cat-double-03', '/Catalogue/AGL Work/double charge mockup 03.jpg', 'Double Charge spread', 'AGL', 'catalogue', 'wide'),
  piece('bind-fiona-1', '/Box Desgin & Binder/AGL work/FIONA - GREIGE - TRIVERA Binder Mockup 01.jpg', 'Fiona / Greige / Trivera', 'AGL', 'binder', 'tall'),
  piece('bind-fiona-2', '/Box Desgin & Binder/AGL work/FIONA - GREIGE - TRIVERA Binder Mockup 02.jpg', 'Fiona binder interior', 'AGL', 'binder', 'square'),
  piece('bind-glifo-1', '/Box Desgin & Binder/AGL work/GLIFO Binder Update Mockup 01.jpg', 'Glifo binder', 'AGL', 'binder', 'tall'),
  piece('bind-glifo-2', '/Box Desgin & Binder/AGL work/GLIFO Binder Update Mockup 02.jpg', 'Glifo binder open', 'AGL', 'binder', 'wide'),
  piece('bind-onyx-1', '/Box Desgin & Binder/AGL work/Vencros - Onyx Marble Binder Mockup 01.jpg', 'Vencros Onyx', 'AGL', 'binder', 'tall'),
  piece('bind-travertine-1', '/Box Desgin & Binder/AGL work/Vencros - Travertine Stone Binder Mockup 01.jpg', 'Vencros Travertine', 'AGL', 'binder', 'square'),
  piece('pack-dalfo', '/Box Desgin & Binder/DALFO MOCKUP.png', 'Aluminium foil carton', 'Dalfo', 'packaging', 'wide'),
  piece('mark-alifview', '/Logo/alifview.jpg', 'Alifview', 'Alifview', 'mark', 'square'),
  piece('mark-apex', '/Logo/apex.jpg', 'Apex', 'Apex', 'mark', 'square'),
  piece('mark-levelup', '/Logo/levelup.jpg', 'Levelup', 'Levelup', 'mark', 'square'),
  piece('mark-rsquare', '/Logo/rsquare logo.jpg', 'R Square', 'R Square', 'mark', 'square'),
  piece('mark-samanvitha', '/Logo/SAMANVITHA logo.jpg', 'Samanvitha', 'Samanvitha', 'mark', 'square'),
  piece('soc-1', '/Social Media/1.jpg', 'Feed system', 'Studio', 'social', 'tall'),
  piece('soc-2', '/Social Media/2.jpg', 'Campaign still', 'Studio', 'social', 'tall'),
  piece('soc-add', '/Social Media/add1.jpg', 'Announcement ad', 'Studio', 'social', 'square'),
  piece('soc-announce', '/Social Media/Announcement.jpg', 'Announcement', 'Studio', 'social', 'square'),
  piece('soc-asteroid', '/Social Media/asteroid.png', 'Asteroid', 'Studio', 'social', 'square'),
  piece('soc-couple', '/Social Media/Bengali famous romantic couple.jpg', 'Portrait campaign', 'Studio', 'social', 'tall'),
  piece('soc-merin', '/Social Media/Merin & Lija.jpg', 'Merin & Lija', 'Studio', 'social', 'tall'),
  piece('soc-nom', '/Social Media/NOMINATION POST.jpg.jpeg', 'Nomination post', 'Studio', 'social', 'square'),
  piece('soc-cover', '/Social Media/social media.jpg', 'Social cover', 'Studio', 'social', 'wide'),
  piece('sta-form', '/Stationery/Application/admission form.jpg.jpeg', 'Admission form', 'Application', 'stationery', 'tall'),
  piece('sta-crystal', '/Stationery/Diaries/DIARY CRYSTAL.jpg', 'Crystal diary', 'Crystal', 'stationery', 'tall'),
  piece('sta-mq', '/Stationery/Diaries/M&Q Estimate Pad.jpg', 'Estimate pad', 'M&Q', 'stationery', 'square'),
  piece('sta-power', '/Stationery/Diaries/Powergrace Estimate Pad.jpg', 'Estimate pad', 'Powergrace', 'stationery', 'square'),
]
