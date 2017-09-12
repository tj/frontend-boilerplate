
import path from 'path';
import paths from './paths';

const { NODE_ENV } = process.env;

module.exports = {
  context: paths.appBuild,
  entry: {
    jsx: [
      NODE_ENV === 'development' && 'react-hot-loader/patch',
      './index.js',
    ].filter(entry => !!entry),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'history',
      'immutable',
      'classnames',
      'normalizr',
    ],
  },
  output: {
    path: paths.outputPath,
    filename: paths.outputName,
  },
  module: {
    strictExportPresence: NODE_ENV === 'production',
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|blueprints/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules|blueprints/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=10000&minetype=image/png', 'img-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@root': path.resolve(paths.appBuild),
      '@assets': path.resolve(paths.appBuild, 'assets'),
      '@pages': path.resolve(paths.appBuild, 'pages'),
      '@components': path.resolve(paths.appBuild, 'components'),
      '@modules': path.resolve(paths.appBuild, 'modules'),
    },
    modules: [
      path.resolve('./'),
      'node_modules',
    ],
  },
};
