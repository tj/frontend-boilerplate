import { REHYDRATE } from 'redux-persist/constants';
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = fromJS({
  storageLoaded: false
});

const handleRehydrate = (state) => state.set('storageLoaded', true);

export default handleActions({
  [REHYDRATE]: handleRehydrate,
}, initialState)
