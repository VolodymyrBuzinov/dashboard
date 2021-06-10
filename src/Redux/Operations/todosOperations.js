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
      await axios
        .post('/tasks', template)
        .then(res => dispatch(todosActions.addTodoSuccess(res.data)));
    } catch (error) {
      dispatch(todosActions.addTodoError(error.response.status));
    }
  };

const updateTodo =
  ({ title, time, category, difficulty, id }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoeRequest());

    /*
    try {
      const template = { category, difficulty, title, time };
      const { date } = await axios.put(`/tasks/${id}`, template);
      dispatch(todosActions.updateTodoeSuccess(date));
    } catch (error) {
      dispatch(todosActions.updateTodoeError(error.response.status));
    }
    */

    try {
      const template = { category, difficulty, title, time };

      dispatch(
        todosActions.updateTodoeSuccess(
          await axios.put(`/tasks/${id}`, template).then(res => res.data),
        ),
      );
    } catch (error) {
      dispatch(todosActions.updateTodoeError(error.response.status));
    }
  };

const updateTodoStatusDone =
  ({ id, done }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoStatusDoneRequest());
    try {
      await axios.patch(`/tasks/${id}/done`, { done: true });
      dispatch(todosActions.updateTodoStatusDoneSuccess(id, done));
    } catch (error) {
      dispatch(todosActions.updateTodoStatusDoneError(error.message));
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
