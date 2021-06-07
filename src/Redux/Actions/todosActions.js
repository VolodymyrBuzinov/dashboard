import { createAction } from '@reduxjs/toolkit'

const fetchTodoRequest = createAction('todos/fetchTodoRequest');
const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
const fetchTodoError = createAction('todos/fetchTodoError');

const addTodoRequest = createAction('todos/addTodoRequest');
const addTodoSuccess = createAction('todos/addTodoSuccess');
const addTodoError = createAction('todos/addTodoError');

const deleteTodoRequest = createAction('todos/deleteTodoRequest');
const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
const deleteTodoError = createAction('todos/deleteTodoError');

// const changeFilter = createAction('todos/changeFilter')

const clearTodoError = createAction('todos/clearError');

const todosActions = {
    fetchTodoRequest,
    fetchTodoSuccess,
    fetchTodoError,
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoError,
    // changeFilter,
    clearTodoError,
};
export default todosActions;