var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './client'),
  entry: {
    jsx: './index.jsx',
    html: './index.html',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'actions': path.join(__dirname, 'client/actions'),
      'components': path.join(__dirname, 'client/components'),
      'constants': path.join(__dirname, 'client/constants'),
      'containers': path.join(__dirname, 'client/containers'),
      'middleware': path.join(__dirname, 'client/middleware'),
      'reducers': path.join(__dirname, 'client/reducers'),
      'store': path.join(__dirname, 'client/store')
    }
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
