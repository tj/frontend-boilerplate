import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos';
import status from './status';

export default combineReducers({
  routing,
  todos,
  status
})
