import React, { useState } from 'react';
import s from './LoginPage.module.scss';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginAuth } from '../../Redux/Auth/authOperation';

const LoginPage = () => {
  const dispatch = useDispatch();
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
