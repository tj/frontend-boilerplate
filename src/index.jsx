
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from "react-dom"
import React from "react"

import App from '../containers/App'
import configure from '../store'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
