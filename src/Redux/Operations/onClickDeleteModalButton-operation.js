import axios from 'axios';
import {
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
} from '../Actions/onClickDeleteModalButton-action';

const removeTaskCard = cardId => dispatch => {
  dispatch(deleteTaskRequest());
  // dispatch(deleteTaskSuccess(cardId));
  axios
    .delete(`/tasks/${cardId}`)
    .then(() => dispatch(deleteTaskSuccess(cardId)))
    .catch(error => dispatch(deleteTaskError(error.message)));
};
const exp = {
  removeTaskCard,
};
export default exp;
