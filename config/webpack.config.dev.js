
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: paths.appBuild,
  entry: {
    jsx: [
      './index.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
    ],
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: './client',
    hot: true,
    port: 3000,
  },
  module: {
    // strictExportPresence: true,
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: /client/,
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: /client/,
        use: [
          'react-hot-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /client/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /client/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=10000&minetype=image/png', 'img-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin(JSON.stringify({
      'process.env.NODE_ENV': 'development',
    })),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
  ],
};
