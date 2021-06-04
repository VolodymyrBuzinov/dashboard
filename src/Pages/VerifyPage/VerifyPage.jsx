import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import LoginPage from '../LoginPage/LoginPage';

export default function VerifyPage() {
  return (
    <>
      <h1>Ура почта подтверждена!!!</h1>
      <NavLink exact to="/">
        Валим отсюда
      </NavLink>
    </>
  );
}
