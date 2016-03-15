const express = require('express')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../webpack.config.js')
const history = require('connect-history-api-fallback');
const CLIENT_PORT = 3000
const SERVER_PORT = 3001

const app = express()

/*
  Development Env: enable the HotReplacementPugin dynamically
  Production Env: Set the Server's static path to the webpack build(output) path.
*/
if(app.get('env') === 'development'){
  webpackConfig.entry.jsx = [webpackConfig.entry.jsx]
  webpackConfig.entry.jsx.unshift(`webpack-dev-server/client?http://localhost:${CLIENT_PORT}/`, "webpack/hot/dev-server")
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  const devServer= new WebpackDevServer(webpack(webpackConfig), {
    contentBase: __dirname + '/../client', 
    hot: true,
    historyApiFallback: true,
    //proxy the server port, easy to avoid cross-domain while requesting the APIs
    proxy: {
      "/api/*": `http://localhost:${SERVER_PORT}`,
      // "*": `http://localhost:${SERVER_PORT}`
    },
    stats: { colors: true },
  }).listen(CLIENT_PORT)
}
else{
  // enable history-api-fallback
  app.use(history())
  app.use(express.static(__dirname + '/../static'))
}

app.get('/api/test', function (req, res) {
  res.send('The APIs works!')
});

app.listen(SERVER_PORT, function () {
  console.log(`API Server listening on port ${SERVER_PORT}!`)
});