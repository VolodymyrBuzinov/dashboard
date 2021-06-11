import s from './LoginPage.module.scss';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { animated } from 'react-spring';
import { RouteTransition } from '../../Components/RouteTransition/RouteTransition';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isVisibleLoader = useSelector(getLoader);
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, [dispatch]);

  const transitions = RouteTransition();
  return (
    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <section className={s.login_section}>
                  <div className={s.login_container}>
                    <h1 className={s.login_title}>Questify</h1>
                    <p className={s.login_description}>
                      Questify will turn your life into a thrilling game full of
                      amazing quests and exciting challenges.
                    </p>
                    <div className={s.login_textContainer}>
                      <span className={s.login_text}>Choose your name to</span>
                      <NavLink
                        exact
                        to="/singUpPage"
                        className={s.registr_navLink}
                      >
                        <span className={s.registr_link}>sign up</span>
                      </NavLink>
                      <span className={s.login_text}>or log in</span>
                    </div>

                    <RegisterForm />
                  </div>
                  <div className={s.login_pictureBlock}>
                    <img
                      src={bgMobile}
                      alt="background"
                      className={s.login_bgMobile}
                    />
                    <img
                      src={bgMobile2}
                      alt="background"
                      className={s.login_bgMobile}
                    />
                  </div>
                  <img
                    src={pic1}
                    alt="background"
                    className={s.login_loginPic}
                  />
                  <img
                    src={pic2}
                    alt="background"
                    className={s.login_loginPicture}
                  />
                </section>
              </animated.div>
            ),
        )
      )}
    </>
  );
};
export default LoginPage;
