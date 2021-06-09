import axios from 'axios';
import { BaseURL } from '../../Api/AxiosToken';
import todosActions from '../Actions/todosActions';

BaseURL();

const fetchTodos = () => async dispatch => {
  dispatch(todosActions.fetchTodoRequest());
  try {
    const tasks = await axios.get('/tasks').then(tasks => tasks.data.data);
    dispatch(todosActions.fetchTodoSuccess(tasks));
  } catch (error) {
    dispatch(todosActions.fetchTodoError(error.response.status));
  }
};

const addTodo =
  ({ category, difficulty, title, time }) =>
  async dispatch => {
    dispatch(todosActions.addTodoRequest());
    try {
      const template = { category, difficulty, title, time };
      const { data } = await axios.post('/tasks', template);
      dispatch(todosActions.addTodoSuccess(data));
    } catch (error) {
      dispatch(todosActions.addTodoError(error.response.status));
    }
  };

const updateTodo =
  ({ todoId, category, difficulty, title, time }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoeRequest());
    try {
      const template = { category, difficulty, title, time };
      await axios.put(`/tasks/${todoId}`, template);
      dispatch(todosActions.updateTodoeSuccess(todoId));
    } catch (error) {
      dispatch(todosActions.updateTodoeError(error.response.status));
    }
  };

const updateTodoStatusDone =
  ({ id, done = 'true' }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoStatusDoneRequest());
    try {
      await axios.patch(`/tasks/${id}/done`, done);
      dispatch(todosActions.updateTodoStatusDoneSuccess(id));
    } catch (error) {
      console.log('🚀 ~ file: todosOperations.js ~ line 51 ~ error', error);
      dispatch(todosActions.updateTodoStatusDoneError(error));
    }
  };

const deleteTodo = todoId => async dispatch => {
  dispatch(todosActions.deleteTodoRequest());
  try {
    await axios.delete(`/tasks/${todoId}`);
    dispatch(todosActions.deleteTodoSuccess(todoId));
  } catch (error) {
    dispatch(todosActions.deleteTodoError(error.response.status));
  }
};

const exp = {
  fetchTodos,
  addTodo,
  updateTodo,
  updateTodoStatusDone,
  deleteTodo,
};
export default exp;
