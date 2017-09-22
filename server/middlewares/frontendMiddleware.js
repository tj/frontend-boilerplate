/* eslint-disable global-require */
const React = require('react');
const express = require('express');
const path = require('path');
const compression = require('compression');

// Dev middleware
const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};

// Production middlewares
const addProdMiddlewares = (app, options) => {
  const ReactDOMServer = require('react-dom/server');
  const App = require('../../client');

  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  function handleRender(req, res) {
    const html = ReactDOMServer.renderToString(<App />);

    res.readFile(path.resolve(outputPath, 'index.html'), 'utf8', function (err, data) {
      if (err) throw err;

      // Inserts the rendered React HTML into our main div
      const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

      // Sends the response back to the client
      res.send(document);
    });
  }

  app.get('*', handleRender);
};

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.config.dev.babel');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
