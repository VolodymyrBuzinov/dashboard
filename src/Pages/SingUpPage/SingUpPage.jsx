import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../LoginPage/Login.scss';
import s from './SingUpPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerAuth } from '../../Redux/Operations/authOperation';
import Spinner from '../../Components/Spinner/Spinner';
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { useTransition, animated } from 'react-spring';

const SingUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isVisibleLoader = useSelector(getLoader);
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, [dispatch]);
  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    dispatch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
  };

  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 300ms ease-in',
    },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 1500,
  });

  return (
    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <section className={s.registr_section}>
                  <div className={s.registr_container}>
                    <h1 className={s.registr_title}>Questify</h1>
                    <h2 className={s.registr_caption}>Registration</h2>
                    <p className={s.registr_text}>
                      Back to{' '}
                      <NavLink exact to="/" className={s.registr_link}>
                        log in
                      </NavLink>
                    </p>
                    <form onSubmit={btnClick}>
                      <div className={s.registr_inputContainer}>
                        <input
                          required
                          id="name"
                          className={s.registr_input}
                          type="text"
                          value={name}
                          onChange={nameFunc}
                        />
                        {!name && (
                          <label htmlFor="name" className={s.registr_label}>
                            Name
                          </label>
                        )}
                      </div>
                      <div className={s.registr_inputContainer}>
                        <input
                          required
                          id="email"
                          className={s.registr_input}
                          type="text"
                          value={email}
                          onChange={emailFunc}
                        />
                        {!email && (
                          <label htmlFor="email" className={s.registr_label}>
                            Email
                          </label>
                        )}
                      </div>

                      <div className={s.registr_inputContainer}>
                        <input
                          required
                          id="password"
                          className={s.registr_input}
                          type="password"
                          value={password}
                          onChange={passwordFunc}
                        />
                        {!password && (
                          <label htmlFor="password" className={s.registr_label}>
                            Password
                          </label>
                        )}
                      </div>
                      <button type="submit">Go</button>
                    </form>
                  </div>
                  <img
                    src={pic1}
                    alt="background"
                    className={s.registr_loginPic}
                  />
                  <img
                    src={pic2}
                    alt="background"
                    className={s.registr_loginPicture}
                  />
                  <img
                    src={bgMobile}
                    alt="background"
                    className={s.registr_bgMobile}
                  />
                  <img
                    src={bgMobile2}
                    alt="background"
                    className={s.registr_bgMobile}
                  />
                </section>
              </animated.div>
            ),
        )
      )}
    </>
  );
};

export default SingUpPage;
