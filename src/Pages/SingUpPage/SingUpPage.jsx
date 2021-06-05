import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../LoginPage/Login.scss';
import s from './SingUpPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWaiting } from '../../Redux/Selectors/authSelectors';
import { registerAuth } from '../../Redux/Operations/authOperation';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SingUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const wait = useSelector(getWaiting);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <section className={s}>
      <CSSTransition
        in={wait}
        classNames="waitingMessage"
        timeout={250}
        unmountOnExit
      >
        <Loader
          className={s.waitingMessage}
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </CSSTransition>
      <NavLink exact to="/"
        // className={s} activeClassName={s}
      >
        Back
      </NavLink>
      <h1 className={s}>Registration</h1>
      <form className={s} onSubmit={btnClick}>
        <label className={s}>
          Login
          <input
            required
            className={s}
            type="text"
            value={name}
            placeholder="Enter login"
            onChange={nameFunc}
          />
        </label>
        <br />
        <label className={s}>
          Email
          <input
            required
            className={s}
            type="text"
            value={email}
            placeholder="Enter email"
            onChange={emailFunc}
          />
        </label>
        <br />
        <label className={s}>
          Password
          <input
            required
            className={s}
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={passwordFunc}
          />
        </label>
        <br />
        <button type="submit" className={s}>
          Registration
        </button>
      </form>
    </section>
  );
};
export default SingUpPage;
