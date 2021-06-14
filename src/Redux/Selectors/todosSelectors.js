const getLoading = state => state.todos.loading;
const getFilter = state => state.todos.filter;
const getAllTodos = state => state.todos.items;
const getError = state => state.todos.error;
const getErrorRefToken = state => state.todos.refreshTokenError;

const exp = {
  getLoading,
  getFilter,
  getError,
  getAllTodos,
  getErrorRefToken,
};
export default exp;
