import { useDispatch, useSelector } from 'react-redux';
import { errorLogOut, error } from '../../Redux/Selectors/authSelectors';
import Selector from '../../Redux/Selectors/todosSelectors';
import {
  refToken,
  getCurrentUser,
  logOutAuth,
} from '../../Redux/Operations/authOperation';

export function Refresh() {
  const dispatch = useDispatch();
  const stateAuthErrorLogOut = useSelector(errorLogOut);
  const stateTodoError = useSelector(Selector.getErrorRefToken);
  const stateRefreshPage = useSelector(error);
  if (stateTodoError || stateRefreshPage === 401) {
    dispatch(refToken());
    setTimeout(() => {
      dispatch(getCurrentUser());
    }, 1000);
  }

  if (stateAuthErrorLogOut === 401) {
    dispatch(refToken());
    setTimeout(() => {
      dispatch(logOutAuth());
    }, 1000);
  }
}
