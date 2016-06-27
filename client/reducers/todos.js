import uuid from 'uuid';
import assign from 'object-assign';
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { ACTION_TODO } from '../constants';

const defaultTodo = {
  text: 'Use Redux',
  completed: false,
  id: uuid()
};

const createItem = (text) => ({
  id: uuid(),
  completed: false,
  text
});

const initialState = fromJS({
  items: []
});

const findIndex = (items, id) => items.findIndex((item) => item.id === id);

const handleAddSuccess = (state, fsa) => state
  .update('items', (items) => items
    .insert(0, createItem(fsa.payload))
  );
const handleDeleteSuccess = (state, fsa) => state
  .update('items', (items) => items
    .delete(findIndex(items, fsa.payload))
  );
const handleEditSuccess = (state, fsa) => state
  .update('items', (items) => items
    .update(findIndex(items, fsa.payload.id), (item) => assign({}, item, { text: fsa.payload.text }))
  );
const handleCompleteSuccess = (state, fsa) => state
  .update('items', (items) => items
    .update(findIndex(items, fsa.payload), (item) => assign({}, item, { completed: !item.completed }))
  );
const handleCompleteAllSuccess = (state, fsa) => state
  .update('items', items => {
    const areAllMarked = items.every(item => item.completed);
    return items.map(item => assign({}, item, { completed: !areAllMarked }));
  });
const handleClearCompleted = (state, fsa) => state
  .update('items', items => items.filter(item => item.completed === false));

export default handleActions({
  [ACTION_TODO.ADD]: handleAddSuccess,
  [ACTION_TODO.DELETE]: handleDeleteSuccess,
  [ACTION_TODO.EDIT]: handleEditSuccess,
  [ACTION_TODO.COMPLETE]: handleCompleteSuccess,
  [ACTION_TODO.COMPLETE_ALL]: handleCompleteAllSuccess,
  [ACTION_TODO.CLEAR_COMPLETED]: handleClearCompleted
}, initialState)
