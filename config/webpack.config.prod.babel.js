import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import baseConfig from './webpack.config.common.js'

module.exports = {
  ...baseConfig,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin(
      JSON.stringify({
        'process.env': JSON.stringify({ NODE_ENV: 'production' }),
      })
    ),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
}
