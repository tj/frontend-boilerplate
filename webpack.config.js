
var autoprefixer = require('autoprefixer')

module.exports = {
  context: __dirname + "/src",
  entry: {
    jsx: "./index.jsx",
    css: "./main.css",
    html: "./index.html",
  },
  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
}
