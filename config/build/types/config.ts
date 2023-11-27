export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  source: string
  baseSrc: string
}

export interface buildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  analyze: boolean
  env: environments
}

export interface environments {
  mode: 'production' | 'development'
  port: number
  analyze: boolean
  REACT_APP_CLIENT_PORT: string
  REACT_APP_CLIENT_POROTOCOL: string
  REACT_APP_CLIENT_HOST: string
}

export interface IdotEnv {
  parsed: environments
}
