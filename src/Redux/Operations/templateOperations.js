import axios from 'axios';
import { BaseURL } from '../../Api/AxiosToken';
import templateActions from '../Actions/templateActions';

BaseURL();

const createTemplate =
  ({ category, difficulty, title, time }) =>
  async dispatch => {
    dispatch(templateActions.createTemplateRequest());
    try {
      const template = { category, difficulty, title, time };
      const { data } = await axios.post('/tasks', template);
      dispatch(templateActions.createTemplateSuccess(data));
    } catch (error) {
      dispatch(templateActions.createTemplateError(error.response.status));
    }
  };

/* POST  = new todo
https://dashboard-go-it.herokuapp.com/tasks

{
  "category": "STUFF",
  "difficulty": "EASY",
  "title": "Do something 2",
  "time": "2021-06-10T20:30",
}

*/

const updateTemplate = todoId => async dispatch => {
  dispatch(templateActions.updateTemplateRequest());
  try {
    await axios.put(`/tasks/${todoId}`);
    dispatch(templateActions.updateTemplateSuccess(todoId));
  } catch (error) {
    dispatch(templateActions.updateTemplateError(error.response.status));
  }
};

/* POST  = new todo
https://dashboard-go-it.herokuapp.com/tasks/60bf333700af71001c9e493d

{
"challenge": false,
"done": false,
"category": "STUFF",
"difficulty": "NORMAL",
"title": "Do something",
"time": "2021-06-08T20:30"
}

*/

const exp = {
  createTemplate,
  updateTemplate,
};
export default exp;
