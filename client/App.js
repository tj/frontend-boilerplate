
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import Root from './pages';

import store from './modules/store';
import history from './modules/history';

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Root} />
      </ConnectedRouter>
    </Provider>
  );
}
