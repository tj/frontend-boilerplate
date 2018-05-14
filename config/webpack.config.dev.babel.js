import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import baseConfig from './webpack.config.common.js'

module.exports = {
  ...baseConfig,
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: './client',
    hot: true,
    port: 3000,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEVTOOLS__: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
  ],
}
