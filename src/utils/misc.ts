export function timestamp() {
  return new Date().getTime().toString()
}

export function imageSrc(
  thumbnail: { path: string; extension: string },
  type: 'detail' | 'portrait_incredible' = 'detail'
) {
  return `${thumbnail.path}/${type}.${thumbnail.extension}`
}
