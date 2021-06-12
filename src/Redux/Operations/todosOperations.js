import axios from 'axios';
import { BaseURL } from '../../Api/AxiosToken';
import todosActions from '../Actions/todosActions';
import { toast } from 'react-toastify';

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
  ({ id, category, difficulty, title, time }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoRequest());

    try {
      const template = { category, difficulty, title, time };

      dispatch(
        todosActions.updateTodoSuccess(
          await axios.put(`/tasks/${id}`, template).then(res => res.data),
        ),
      );
    } catch (error) {
      dispatch(todosActions.updateTodoError(error.response.status));
    }
  };

const updateTodoStatusDone =
  ({ id, done }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoStatusDoneRequest());
    try {
      const newQuest = await axios
        .patch(`/tasks/${id}/done`, { done: true })
        .then(res => res.data);
      dispatch(todosActions.updateTodoStatusDoneSuccess(newQuest));
    } catch (error) {
      console.log('🚀 ~ file: todosOperations.js ~ line 58 ~ error', error);
      dispatch(todosActions.updateTodoStatusDoneError(error.message));
    }
  };

const deleteTodo = todoId => async dispatch => {
  dispatch(todosActions.deleteTodoRequest());
  try {
    await axios.delete(`/tasks/${todoId}`);
    dispatch(todosActions.deleteTodoSuccess(todoId));
    toast.info('Your task is successfully deleted!');
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
