import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosActions  from "../Actions/todosActions";

const items = createReducer([], {
  [todosActions.fetchTodoSuccess]: (_, { payload }) => payload,
  [todosActions.addTodoSuccess]: (state, { payload }) => [payload, ...state],

  [todosActions.deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

/*const filter = createReducer('', {
    [todosActions.changeFilter]: (_, { payload }) => payload,
});*/

const loading = createReducer(false, {
  [todosActions.fetchTodoRequest]: () => true,
  [todosActions.fetchTodoSuccess]: () => false,
  [todosActions.fetchTodoError]: () => false,

  [todosActions.addTodoRequest]: () => true,
  [todosActions.addTodoSuccess]: () => false,
  [todosActions.addTodoError]: () => false,

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
});
export default combineReducers({
    items,
    //filter,
    loading,
    error,
    refreshTokenError
});
