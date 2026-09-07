/** Encode a `/public` path that may contain spaces or `&`. */
export function publicAsset(path: string) {
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
    .replace(/^\/?/, '/')
}
