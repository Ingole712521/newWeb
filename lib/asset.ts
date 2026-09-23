export function asset(path: string) {
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
    .replace(/^\/?/, '/')
}

export const images = {
  glifo: asset('/Catalogue/AGL Work/Glifo mockup 01.jpg'),
  signature: asset('/Catalogue/AGL Work/SIGNATURE MOCKUP 01.jpg'),
  fresco: asset('/Catalogue/AGL Work/FRESCO RIZON COLLECTION - 2026 mockup copy.jpg'),
  mq: asset('/Catalogue/AGL Work/M&Q MOCKUP copy.jpg'),
  binderFiona: asset('/Box Desgin & Binder/AGL work/FIONA - GREIGE - TRIVERA Binder Mockup 01.jpg'),
  binderGlifo: asset('/Box Desgin & Binder/AGL work/GLIFO Binder Update Mockup 01.jpg'),
  double001: asset('/Catalogue/AGL Work/double charge mockup 001.jpg'),
  marblex: asset('/Catalogue/AGL Work/MARBLEX - 1200x1800 -Trivera_Fiona_Cerena_Griege_Marblex - 2026 mockup copy.jpg'),
  stonera: asset('/Catalogue/AGL Work/StonEra - 1600x3200 - 2026 mockup copy.jpg'),
  social1: asset('/Social Media/1.jpg'),
  social2: asset('/Social Media/2.jpg'),
  announcement: asset('/Social Media/Announcement.jpg'),
  avatar: '/mascots/studio-directions.webp',
} as const
