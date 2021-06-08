import { useDispatch, useSelector } from 'react-redux';
import Selector from '../../Redux/Selectors/todosSelectors';
import { error } from '../../Redux/Selectors/authSelectors';
import { refToken, getCurrentUser } from '../../Redux/Operations/authOperation';

export default function RefreshToken() {
  const state = useSelector(Selector.getErrorRefToken);
  const stateAuth = useSelector(error);
  const dispatch = useDispatch();
  if (state || stateAuth === 401) {
    dispatch(refToken());
    setTimeout(() => {
      dispatch(getCurrentUser());
    }, 500);
  }
}
