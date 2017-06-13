
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initializeFastClick from 'react-fastclick';
import { ConnectedRouter } from 'react-router-redux';

import App from './pages';
import store from './modules/store';
import history from './modules/history';

/*
 * Add `react-fastclick` so mobile devices don't have any problems with to slow
 * clicks on UI elements
 */
initializeFastClick();

/*
 * Render the React Pages into the actual DOM
 */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
