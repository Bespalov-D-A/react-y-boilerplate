import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { buildOptions } from './types/config'

export function buildDevSever(options: buildOptions): DevServerConfiguration {
  return {
    port: options.port,
    hot: true,
    open: true,
    historyApiFallback: true
  }
}
