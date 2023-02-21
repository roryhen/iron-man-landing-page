type Resource = {
  available: number
  collectionURI: string
  items: {
    resourceURI: string
    name: string
    role: string
    type: string
  }[]
  returned: number
}

export type Character = {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: Resource
  series: Resource
  stories: Resource
  events: Resource
  urls: {
    type: string
    url: string
  }[]
}

export type Comic = {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: {
    type: string
    language: string
    text: string
  }[]
  resourceURI: string
  urls: {
    type: string
    url: string
  }[]
  series: {
    resourceURI: string
    name: string
  }
  variants: Resource
  collections: Resource
  collectedIssues: Resource
  dates: {
    type: string
    date: string
  }[]
  prices: {
    type: string
    price: number
  }[]
  thumbnail: {
    path: string
    extension: string
  }
  images: {
    path: string
    extension: string
  }[]
  creators: Resource
  characters: Resource
  stories: Resource
  events: Resource
}

export type APIResponse<TData> = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: TData[]
  }
}
