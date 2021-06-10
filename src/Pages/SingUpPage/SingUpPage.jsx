import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../LoginPage/Login.scss';
import s from './SingUpPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerAuth,
  reVerificationt,
} from '../../Redux/Operations/authOperation';
import Spinner from '../../Components/Spinner/Spinner';
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { animated } from 'react-spring';
import Button from '../../Components/Button/Button';
import { RouteTransition } from '../../Components/RouteTransition/RouteTransition';

const SingUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEmail, setReEmail] = useState('');

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
    setReEmail(email);
    setEmail('');
    setName('');
    setPassword('');
  };

  const transitions = RouteTransition();

  const sendFollowUpLetter = e => {
    e.preventDefault();
    dispatch(reVerificationt({ email: reEmail }));
  };

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
                    <div className={s.registr_textContainer}>
                      <span className={s.registr_text}>Back to</span>
                      <NavLink
                        exact
                        to="/"
                        className={s.registr_navLink}
                        // activeClassName={s}
                      >
                        <span className={s.registr_link}>log in</span>
                      </NavLink>


              <div className={s.registr_secondBtnContainer}>
                {/* <button
                  type="button"
                  className={s.register_secondaryBtn}
                  onClick={sendFollowUpLetter}
                >
                  Send a follow-up letter
                </button> */}
                <p>Send a follow-up letter</p>

                <div className={s.registr_inputContainerSend}>
                  <input
                    required
                    id="email"
                    className={s.registr_inputSendLetter}
                    type="text"
                    value={reEmail}
                    onChange={emailFunc}
                  />
                  <button className={s.registr_sendBtn} type="button" onClick={sendFollowUpLetter}></button>
                  {!reEmail && (
                    <label
                      htmlFor="email"
                      className={s.registr_labelSendLetter}
                    >
                      Email
                    </label>
                  )}
                </div>
              </div>
            </div>


                    <form onSubmit={btnClick} className={s.registr_form}>
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

                      <div className={s.registr_btn}>
                        <Button content="go!" isFixed={false} />
                      </div>
                    </form>
                  </div>
                  <div className={s.registr_pictureBlock}>
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
                </section>
              </animated.div>
            ),
        )
      )}
    </>
  );
};

export default SingUpPage;
