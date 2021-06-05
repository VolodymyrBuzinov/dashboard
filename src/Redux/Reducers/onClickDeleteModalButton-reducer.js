import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    deleteTask
    // deleteTaskRequest,
    // deleteTaskSuccess,
    // deleteTaskError
} from '../Actions/onClickDeleteModalButton-action'

// const removeCard = createReducer([], {
//     [deleteTaskSuccess]: (state,{ payload }) => state.filter(({id})=>id !== payload)
// })

///////////////////

const remove = createReducer(false, {
    [deleteTask]: (state,{ payload }) => state.filter(({id})=>id !== payload)
})

export default combineReducers({
    remove
})