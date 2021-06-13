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
  ({ category, difficulty, title, time, challenge }) =>
  async dispatch => {
    dispatch(todosActions.addTodoRequest());
    try {
      const template = { category, difficulty, title, time, challenge };
      await axios
        .post('/tasks', template)
        .then(res => dispatch(todosActions.addTodoSuccess(res.data)));
        toast.info('Your quest is successfully added!');
    } catch (error) {
      dispatch(todosActions.addTodoError(error.response.status));
      toast.error('Quest is not added! Fill all the fields!');
    }
  };

const updateTodo =
  ({ id, category, difficulty, title, time, challenge }) =>
  async dispatch => {
    dispatch(todosActions.updateTodoRequest());

    try {
      const template = { category, difficulty, title, time, challenge };

      dispatch(
        todosActions.updateTodoSuccess(
          await axios.put(`/tasks/${id}`, template).then(res => res.data),
        ),
      );
      toast.info('Your quest is successfully updated!');
    } catch (error) {
      dispatch(todosActions.updateTodoError(error.response.status));
      toast.error('Quest is not updated!');
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
      toast.info('Your quest is successfully added to Done!');
    } catch (error) {
      console.log('🚀 ~ file: todosOperations.js ~ line 58 ~ error', error);
      dispatch(todosActions.updateTodoStatusDoneError(error.message));
      toast.error('Quest is not added to Done!');
    }
  };

const deleteTodo = todoId => async dispatch => {
  dispatch(todosActions.deleteTodoRequest());
  try {
    await axios.delete(`/tasks/${todoId}`);
    dispatch(todosActions.deleteTodoSuccess(todoId));
    toast.info('Your quest is successfully deleted!');
  } catch (error) {
    dispatch(todosActions.deleteTodoError(error.response.status));
    toast.error('Quest is not deleted!');
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
