// import s from './ExitButton.module.scss';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logOutAuth } from '../../Redux/Operations/authOperation';

const ExitButton = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logOutAuth());
  }, [dispatch]);

  return (
    <button
      exact
      to="/"
      // className={s.navLink}
      // activeClassName={s.navLinkactive}
      onClick={() => {
        onLogout();
      }}
    >
      Exit
    </button>
  );
};
export default ExitButton;
