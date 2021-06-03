import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {onClickBtnCreate} from '../Actions/onClickBtnCreate-action'

const isVisibleTemplate = createReducer(false, {
    [onClickBtnCreate]: (_, { payload }) => payload,
})

export default combineReducers({
    isVisibleTemplate,
})