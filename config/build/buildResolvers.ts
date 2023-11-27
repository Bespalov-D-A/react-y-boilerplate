import type webpack from 'webpack'
import path from 'path'
import { type buildOptions } from './types/config'

export function buildResolvers(options: buildOptions): webpack.ResolveOptions {
  const { paths } = options
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // при импорте не надо укзаывать расширение файлов
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [paths.baseSrc, 'node_modules'],
    alias: {
      '@root': path.resolve(paths.baseSrc),
      '@app': path.resolve(paths.source, '1-app/'),
      '@process': path.resolve(paths.source, '2-process/'),
      '@pages': path.resolve(paths.source, '3-pages/'),
      '@widgets': path.resolve(paths.source, '4-widgets/'),
      '@features': path.resolve(paths.source, '5-features/'),
      '@entities': path.resolve(paths.source, '6-entities/'),
      '@shared': path.resolve(paths.source, '7-shared/')
    }
  }
}
