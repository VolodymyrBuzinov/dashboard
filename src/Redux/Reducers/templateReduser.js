import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { onClickBtnCreate } from '../Actions/onClickBtnCreate-action';
import { editTodo } from '../Actions/editTodo-action';

const isVisibleTemplate = createReducer(false, {
  [onClickBtnCreate]: (_, { payload }) => payload,
});

const isEdit = createReducer(false, {
  [editTodo]: (_, { payload }) => payload,
});

export default combineReducers({
  isVisibleTemplate,
  isEdit,
});
