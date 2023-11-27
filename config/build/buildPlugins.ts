import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {
  type environments,
  type buildOptions,
  type IdotEnv
} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import Dotenv from 'dotenv-webpack'
import path from 'path'
import { prettyFormat } from '@testing-library/react'

let loadingPercentage = 0
// файл для декомпозиции плагинов
// вернёт нам плагины
export function buildPlugins({
  paths,
  isDev,
  analyze,
  env
}: buildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    // Добавляем плагины
    // https://webpack.js.org/plugins/
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin({
      percentBy: 'modules',
      dependencies: false,
      entries: false,
      modules: false,
      handler(percentage, message, ...args) {
        if (Math.round((percentage * 100) / 10) * 10 !== loadingPercentage) {
          loadingPercentage = Math.round((percentage * 100) / 10) * 10
          console.log(
            `Loading frontend: ${Math.round((percentage * 100) / 10) * 10}%`
          )
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: analyze ? 'server' : 'disabled' }),
    new Dotenv({ path: path.resolve(paths.baseSrc, '.env') }),
    new webpack.DefinePlugin({ WEBPACK_IS_DEV: JSON.stringify(isDev) }),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ]

  return plugins
}
