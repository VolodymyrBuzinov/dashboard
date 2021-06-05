import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import cards from '../../../cards.json'
import {
    deleteTaskSuccess
    // deleteTaskRequest,
    // deleteTaskSuccess,
    // deleteTaskError
} from '../Actions/onClickDeleteModalButton-action'

// const tasks = createReducer(cards, {
//     [deleteTaskSuccess]: (state,{ payload }) => state.filter(({id})=>id !== payload)
// })

const tasks = createReducer(cards, {
    [deleteTaskSuccess]: (state,{ payload }) => state.filter(({id})=>id !== payload)
})

export default combineReducers({
    tasks
})