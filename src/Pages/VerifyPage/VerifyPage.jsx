import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { verify } from '../../Redux/Operations/authOperation';

export default function VerifyPage() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(verify(true));
  }, [dispatch]);
  setTimeout(() => {
    onLogout();
  }, 5000);
  return (
    <>
      <h1>Ура почта подтверждена!!!</h1>
      {/* <NavLink exact to="/">
        Валим отсюда
      </NavLink> */}
    </>
  );
}
