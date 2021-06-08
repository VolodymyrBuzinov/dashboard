import { useDispatch, useSelector } from 'react-redux';
// import iconLogout from '../../Icons/svg/logout.svg';
import s from './ButtonLogout.module.scss';
import { logOutAuth } from '../../Redux/Operations/authOperation';
import { refToken } from '../../Redux/Operations/authOperation';
import sprite from '../../Icons/symbol-defs.svg';

import Selector from '../../Redux/Selectors/todosSelectors';
import { error } from '../../Redux/Selectors/authSelectors';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const state = useSelector(Selector.getErrorRefToken);
  const stateAuth = useSelector(error);
  const onLogout = () => {
    dispatch(logOutAuth());
    if (state || stateAuth === 401) {
      dispatch(refToken());
      setTimeout(() => {
        dispatch(logOutAuth());
      }, 1000);
    }
  };
  return (
    <button className={s.buttonLogout} onClick={() => onLogout()}>
      <svg className={s.icon} width="22px" height="17px">
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
    </button>
  );
};

export default ButtonLogout;
