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
import { useTransition, animated } from 'react-spring';

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

  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 100ms ease-in',
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
                <section className={s.login_section}>
                  <div className={s.login_container}>
                    <h1 className={s.login_title}>Questify</h1>
                    <p className={s.login_description}>
                      <span>
                        Questify will turn your life into a thrilling game full
                        of amazing quests and exciting challenges.
                      </span>
                    </p>
                    <p className={s.login_text}>
                      <span>
                        Choose your name to{' '}
                        <NavLink
                          exact
                          to="/singUpPage"
                          className={s.login_text}
                        >
                          <span>sign up</span>
                        </NavLink>{' '}
                        or log in Choose your name{' '}
                      </span>
                    </p>

                    <RegisterForm />
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
                </section>
              </animated.div>
            ),
        )
      )}
    </>
  );
};
export default LoginPage;
