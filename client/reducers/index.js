
import { routeReducer as routing } from 'redux-simple-router'
import { combineReducers } from 'redux'
import todos from './todos'

export default combineReducers({
  routing,
  todos
})
