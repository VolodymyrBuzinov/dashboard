import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconLogout from '../../Icons/svg/logout.svg';
import s from './ButtonLogout.module.scss';
import { logOutAuth } from '../../Redux/Operations/authOperation';
import { refToken } from '../../Redux/Operations/authOperation';

import Selector from '../../Redux/Todos/todosSelectors';
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
      <img src={`${iconLogout}`} alt="" />
    </button>
  );
};

export default ButtonLogout;
