//import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.todos.loading;
const getFilter = state => state.todos.filter;
const getAllTodos = state => state.todos.items;
const getError = state => state.todos.error;

/*const getVisibleTodots = createSelector([getAllTodos, getFilter,], (todos, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return todos.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter),
    );
 }); */

 const exp ={
  getLoading,
  getFilter,
 // getVisibleContacts,
    getError,
  getAllTodos
};
export default exp;