import type webpack from 'webpack'
import { buildDevSever } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type buildOptions } from './types/config'

export function buildWebpackConfig(
  options: buildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode, // режим - production: минификация всего и вся

    entry: paths.entry,
    stats: 'errors-warnings',
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevSever(options) : undefined,
    output: {
      filename: '[name].[contenthash].js', // выходные файлы постоянно меняются что бы кэш не мешал
      path: paths.build, // папка куда складываются выходные файлы
      clean: true // делать отчистку прошлых файлов
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options)
  }
}
