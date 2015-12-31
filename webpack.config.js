var rucksack = require('rucksack-css'),
  path = require('path')

module.exports = {
  context: path.join(__dirname, "/client"),
  entry: {
    jsx: "./index.jsx",
    html: "./index.html",
  },
  output: {
    path: path.join(__dirname, "/static"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "postcss-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot",
          "babel-loader"
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ]
}
