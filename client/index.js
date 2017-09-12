
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import initializeFastClick from 'react-fastclick';

import App from './App';

console.info('Application running in', process.env.NODE_ENV, 'mode.'); // eslint-disable-line

/*
 * Add `react-fastclick` so mobile devices don't have any problems with to slow
 * clicks on UI elements
 */
initializeFastClick();

/*
 * Render the React Pages into the actual DOM
 */
render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
