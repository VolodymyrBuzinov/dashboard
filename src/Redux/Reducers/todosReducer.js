import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todosActions from '../Actions/todosActions';

const items = createReducer([], {
  [todosActions.fetchTodoSuccess]: (_, { payload }) => payload,
  [todosActions.addTodoSuccess]: (state, { payload }) => [
    ...state,
    payload.data,
  ],
  [todosActions.updateTodoSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.data._id) {
        return payload.data;
      }
      return item;
    }),
  [todosActions.updateTodoStatusDoneSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item._id === payload.data._id) {
        return payload.data;
      }
      return item;
    }),
  [todosActions.deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [todosActions.fetchTodoRequest]: () => true,
  [todosActions.fetchTodoSuccess]: () => false,
  [todosActions.fetchTodoError]: () => false,

  [todosActions.addTodoRequest]: () => true,
  [todosActions.addTodoSuccess]: () => false,
  [todosActions.addTodoError]: () => false,

  [todosActions.updateTodoRequest]: () => true,
  [todosActions.updateTodoSuccess]: () => false,
  [todosActions.updateTodoError]: () => false,

  [todosActions.updateTodoStatusDoneRequest]: () => true,
  [todosActions.updateTodoStatusDoneSuccess]: () => false,
  [todosActions.updateTodoStatusDoneError]: () => false,

  [todosActions.deleteTodoRequest]: () => true,
  [todosActions.deleteTodoSuccess]: () => false,
  [todosActions.deleteTodoError]: () => false,
});

const error = createReducer('', {
  [todosActions.fetchTodoError]: () =>
    'Ошибка доcтупа к данным! Авторизируйся!',
  [todosActions.addTodoError]: () => 'Ошибка добавления карточки!',
  [todosActions.deleteTodoError]: () => 'Ошибка удаления карточки!',
  [todosActions.clearTodoError]: () => '',
});

const refreshTokenError = createReducer('', {
  [todosActions.fetchTodoError]: (_, { payload }) => payload,
  [todosActions.addTodoError]: (_, { payload }) => payload,
  [todosActions.deleteTodoError]: (_, { payload }) => payload,
  [todosActions.clearTodoError]: (_, { payload }) => payload,
  [todosActions.updateTodoError]: (_, { payload }) => payload,
  [todosActions.updateTodoStatusDoneError]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  loading,
  error,
  refreshTokenError,
});
