import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { loginAuth } from '../../Redux/Operations/authOperation';
import Button from '../Button/Button';
import s from './RegisterForm.module.scss';

const RegisterForm = () => {

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
    <form className={s.registerForm} onSubmit={btnClick}>
      <div className={s.inputContainer}>
        <input
          required
          id="email"
          className={s.registr_input}
          type="text"
          value={email}
          // placeholder="Enter email"
          onChange={emailFunc}
        />
        <label htmlFor="email" className={s.registr_label}>
          Email
        </label>
      </div>

      <div className={s.inputContainer}>
        <input
          required
          id="password"
          className={s.registr_input}
          type="password"
          value={password}
          // placeholder="Enter password"
          onChange={passwordFunc}
        />
        <label htmlFor="password" className={s.registr_label}>
          Password
        </label>
      </div>

      {/* <br /> */}
      {/* <button type="submit" className={s}>
          GO
        </button> */}
        <div className={s.loginBtn}>
        <Button content="go!" isFixed={false} />
        </div>
    </form>
  );
};

export default RegisterForm;