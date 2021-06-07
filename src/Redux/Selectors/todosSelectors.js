//import { createSelector } from "@reduxjs/toolkit";

const today = new Date();
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  if (tomorrow.getDay() === today.getDay()) {
  // console.log('TODAY!');
  } else {
  // console.log('TOMORROW!');
  }
  /**{ time.getDay() === tomorrow.getDay() ? alert('TOMORROW!'): alert(' No TOMORROW!') } */
  /*  {if time.getDay() === today.getDay()}
  {if time.getDay() === tomorrow.getDay()} */

const getLoading = state => state.todos.loading;
const getFilter = state => state.todos.filter;
const getAllTodos = state => state.todos.items;
const getError = state => state.todos.error;

/*const getTodayTodos = createSelector([getAllTodos, today,], (todos) => {
  return
  todos(todo => (todo.time.getDay() === today.getDay()))
});*/

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
   getAllTodos,
  //getTodayTodos
};
export default exp;