
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'
import config from './config'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={config.base} component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
