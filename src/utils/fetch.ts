import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'
import { API_ORIGIN, CHAR_ROUTE } from './constants'
import { hashText } from './crypto'
import { timestamp } from './misc'
import { APIResponse, Character, Comic } from './types'

const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY ?? ''
const PRIVATE_API_KEY = process.env.PRIVATE_API_KEY ?? ''

function getParams() {
  const ts = timestamp()
  return {
    ts: ts,
    apikey: PUBLIC_API_KEY,
    hash: hashText(ts + PRIVATE_API_KEY + PUBLIC_API_KEY),
  }
}

const api = wretch(API_ORIGIN, { mode: 'cors' })
  .addon(QueryStringAddon)
  .errorType('json')

type MarvelType = 'character' | 'comic'

export async function getResource<P extends string, T extends MarvelType>(
  charId: P,
  type: T
) {
  let url = `${CHAR_ROUTE}/${charId}`

  if (type === 'comic') {
    url += '/comics'
  }

  try {
    const characters = await api
      .query(getParams())
      .get(url)
      .json<APIResponse<T extends 'character' ? Character : Comic>>(
        (data) => data
      )

    return characters
  } catch (error) {
    if (error && typeof error === 'object') {
      if ('message' in error) {
        console.error(error.message)
      }

      console.error(error)
    }
    return null
  }
}
