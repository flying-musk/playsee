export interface IRespError {
  error?: {
    code: number
    message: string
    success: boolean
  }
}

export interface IPageToken {
  page_token: string
}

export interface IError {
  isError: true
}

export interface IParams {
  [key: string]: string
}

export interface ISearchParams {
  [key: string]: string | string[] | undefined
}

export interface IRequestInfo {
  language: string // locale
  platform: string // web
  country: string // accept-language
  model: string // "browser + version"
  os_version: string // "os + version"
  ip: string
  x?: string
  y?: string
}

export interface IRequestMeta {
  info: IRequestInfo
  token: string
}
