const express = require('express')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../webpack.config.js')
const history = require('connect-history-api-fallback');
const CLIENT_PORT = 3000
const SERVER_PORT = 3001

const app = express()

if(app.get('env') === 'development'){

  //enable HotReplacementPlugin
  webpackConfig.entry.jsx = [webpackConfig.entry.jsx]
  webpackConfig.entry.jsx.unshift(`webpack-dev-server/client?http://localhost:${CLIENT_PORT}/`, "webpack/hot/dev-server")
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

  const devServer= new WebpackDevServer(webpack(webpackConfig), {
    contentBase: __dirname + '/../client', //seems doesn't effect
    hot: true,
    historyApiFallback: true,

    //proxy the server port, so that easy to avoid cross-domain while requesting the APIs
    proxy: {
      "/api/*": `http://localhost:${SERVER_PORT}`
    },

    // webpack-dev-middleware options
    stats: { colors: true },
  }).listen(CLIENT_PORT)

}
else{
  app.use(history())
  app.use(express.static(__dirname + '/../static'))
}

app.get('/test', function (req, res) {
  res.send('Hello World!')
});
app.get('/api/test', function (req, res) {
  res.send('Hello World!')
});

app.listen(SERVER_PORT, function () {
  console.log(`Example app listening on port ${SERVER_PORT}!`)
});