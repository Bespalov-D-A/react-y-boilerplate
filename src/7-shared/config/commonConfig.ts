const protocol = process.env.REACT_APP_CLIENT_PROTOCOL
const host = process.env.REACT_APP_CLIENT_HOST
const port = process.env.REACT_APP_CLIENT_PORT

interface Iconfig {
  readonly url: Record<string, string>
  readonly supportedLngs: string[]
}

export const config: Iconfig = {
  url: {
    client: `${protocol}://${host}:${port}`
  },
  supportedLngs: ['ru', 'en']
}

Object.freeze(config)
