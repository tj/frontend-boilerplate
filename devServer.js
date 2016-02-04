var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var ProgressBar = require('progress');

var app = express();
var compiler = webpack(config);
var bar = new ProgressBar(':bar :message', {total: 100});

compiler.apply(new ProgressPlugin(function(percentage, msg) {
  bar.update(percentage, {
    message: msg
  });
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
