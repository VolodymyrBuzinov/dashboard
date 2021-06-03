import React, { useState } from 'react';
import s from './LoginPage.module.scss';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWaiting } from '../../Redux/Auth/authSelectors';
import { loginAuth } from '../../Redux/Auth/authOperation';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const wait = useSelector(getWaiting);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(loginAuth({ email, password }));
    setEmail('');
    setPassword('');
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
          type="Ball-Triangle 	"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </CSSTransition>
      <NavLink exact to="/singUpPage" className={s} activeClassName={s}>
        Registration
      </NavLink>
      <div className={s}>
        <h1 className={s}>Login</h1>
        <form className={s} onSubmit={btnClick}>
          <label className={s}>
            <span>Email</span>
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
            <span>Password</span>
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
            GO
          </button>
        </form>
      </div>
    </section>
  );
  // }
};
export default LoginPage;
