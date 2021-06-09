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
/*
const addTodo = ({ category, difficulty, title, time }) =>
  async dispatch => {
    dispatch(templateActions.createTemplateRequest());
    try {
      const template = { category, difficulty, title, time };
      const { data } = await axios.post('/tasks', template);
      dispatch(templateActions.createTemplateSuccess(data));
    } catch (error) {
      dispatch(templateActions.createTemplateError(error.response.status));
    }
  };*/

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
  //addTodo,
  deleteTodo,
};
export default exp;
