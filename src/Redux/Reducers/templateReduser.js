import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { onClickBtnCreate } from '../Actions/onClickBtnCreate-action';
import { editTodo } from '../Actions/editTodo-action';
import templateActions from '../Actions/templateActions';

const isVisibleTemplate = createReducer(false, {
  [onClickBtnCreate]: (_, { payload }) => payload,
});

const isEdit = createReducer(false, {
  [editTodo]: (_, { payload }) => payload,
});

const template = createReducer([], {
  [templateActions.createTemplateSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],

  [templateActions.updateTemplateSuccess]: (state, { payload }) => [
    state.filter(({ id }) => id !== payload),
  ],

  [templateActions.updateStatusDoneTemplateSuccess]: (state, { payload }) => [
    state.filter(({ id }) => id !== payload),
  ],
});

export default combineReducers({
  isVisibleTemplate,
  isEdit,
  template,
});
