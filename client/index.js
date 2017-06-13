
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import initializeFastClick from 'react-fastclick';

import App from './pages';
import configure from './modules/store';
import history from './modules/history';

const store = configure();
fastclick();
initializeFastClick();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
