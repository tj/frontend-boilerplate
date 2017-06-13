
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['null-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=10000&minetype=image/png', 'img-loader'],
      },
    ],
  },
};
