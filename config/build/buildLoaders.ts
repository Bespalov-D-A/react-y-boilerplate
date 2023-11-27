import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type buildOptions } from './types/config'
// декомпозиция лоадеров
// вернет нам наши лоадеры
export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const imgLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: 'file-loader'
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack']
  }

  const svgLoaderUrl = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/ // *.svg?url
    // use: ['@svgr/webpack', 'url-loader'],
  }

  const tsLoader = {
    test: /\.tsx?$/, // расширение
    use: 'ts-loader', // Лоадер которые обработает
    exclude: /node_modules/ // Исключить из обработки
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: isDev
              ? '[local]--[hash:base64:4]'
              : '[hash:base64:8]'
          }
        }
      },

      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [
    // Лоадеры которые отвечают за обработку всех не js файлов
    tsLoader,
    sassLoader,
    svgLoader,
    svgLoaderUrl,
    imgLoader,
    cssLoader
  ]
}
