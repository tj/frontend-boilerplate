import React, {Component} from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configure from './store'
import {setAddress, setStore} from 'two-way-rest';

setAddress('http://localhost:8888');
const store = configure()
setStore(store)

export default function generateWebsite(App){
	return class Website extends Component {
		render(){
			return (
				<Provider store={store}>
				    <Router history={browserHistory}>
				      <Route path="/" component={App}>
				      </Route>
				    </Router>
				  </Provider>
				)
		}
	}
}