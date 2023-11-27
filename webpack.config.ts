import type webpack from 'webpack'
import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import {
  type buildOptions,
  type BuildPaths,
  type environments
} from './config/build/types/config'

const buildpaths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // указываем входные точки, может быть несколько
  build: path.resolve(__dirname, 'build'), // папка куда складываются выходные файлы
  html: path.resolve(__dirname, 'public', 'index.html'),
  source: path.resolve(__dirname, 'src'),
  baseSrc: path.resolve(__dirname, '.')
}

export default function build(env: environments): webpack.Configuration {
  const { mode, analyze, port } = env

  const buildMode = mode ?? 'development'
  const isDev = buildMode === 'development'
  const buildPort = port ?? 3001

  const buildconfig: buildOptions = {
    mode: buildMode,
    paths: buildpaths,
    isDev,
    analyze,
    port: buildPort,
    env
  }

  const config: webpack.Configuration = buildWebpackConfig(buildconfig)
  return config
}
