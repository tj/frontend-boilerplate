
import { createStore, applyMiddleware, compose } from 'redux';

import middleware from './middleware';
import reducers from './reducers';

export default function configure() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
