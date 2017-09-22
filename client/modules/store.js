/* eslint-disable no-underscore-dangle, global-require */
import { createStore, applyMiddleware, compose } from 'redux';

import middleware from './middleware';
import reducers from './reducers';

/*
 * If `redux-dev-tools` are available the `compose` function from those is used
 * otherwise the `compose` function from `redux` is used.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * Apply the needed middleware and reducers to the store and create the store
 * for later export
 */
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware),
));

/*
 * Activate react-hot-loader for reducers
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextReducer);
  });
}

export default store;
