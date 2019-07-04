import ReactDOM from 'react-dom'
import React from 'react'
import genApp from './App'
import preApp from './containers/App/'
const App = genApp(preApp);
const rootEl = document.getElementById('root')

ReactDOM.render(<App />
  ,
  rootEl
)	