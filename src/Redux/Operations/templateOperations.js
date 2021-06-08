import axios from 'axios';
import { BaseURL } from '../../Api/AxiosToken';
import templateActions from '../Actions/templateActions';

BaseURL();

/* POST  = new todo
https://dashboard-go-it.herokuapp.com/tasks
{
  "category": "STUFF",
  "difficulty": "EASY",
  "title": "Do something 2",
  "time": "2021-06-10T20:30",
}
*/

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

/* PUT  = Update todo
https://dashboard-go-it.herokuapp.com/tasks/{tasksid}
{
  "category": "STUFF",
  "difficulty": "EASY",
  "title": "Do something",
  "time": "2021-06-10T20:30",
  "challenge": false,
  "done": false
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

/* PATCH  = update Status Todo (Done)
https://dashboard-go-it.herokuapp.com/tasks/{tasksid}/done
{
  "done": false
}
*/

const updateStatusDoneTemplate = todoId => async dispatch => {
  dispatch(templateActions.updateStatusDoneTemplateRequest());
  try {
    await axios.patch(`/tasks/${todoId}/done`);
    dispatch(templateActions.updateStatusDoneTemplateSuccess(todoId));
  } catch (error) {
    dispatch(
      templateActions.updateStatusDoneTemplateError(error.response.status),
    );
  }
};

const exp = {
  createTemplate,
  updateTemplate,
  updateStatusDoneTemplate,
};
export default exp;
