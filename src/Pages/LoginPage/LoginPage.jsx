import s from './LoginPage.module.scss';
import './Login.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getWaiting } from '../../Redux/Selectors/authSelectors';
import { CSSTransition } from 'react-transition-group';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
<<<<<<< HEAD

const LoginPage = () => {
  return (
    <section className={s.login_section}>
      <div className={s.login_container}>
        <h1 className={s.login_title}>Questify</h1>
        <p className={s.login_description}>
          <span>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </span>
        </p>
        <p className={s.login_text}>
          <span>
            Choose your name to{' '}
            <NavLink exact to="/singUpPage" className={s.login_text}>
              <span>sign up</span>
            </NavLink>{' '}
            or log in Choose your name{' '}
          </span>
        </p>

=======
import Spinner from '../../Components/Spinner/Spinner';

const LoginPage = () => {
  const wait = useSelector(getWaiting);
  return (
    <section className={s.login_section}>
      <CSSTransition
        in={wait}
        classNames="waitingMessage"
        timeout={250}
        unmountOnExit
      >
        <Spinner />
        {/* <Loader
          className={s.waitingMessage}
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        /> */}
      </CSSTransition>

      <div className={s.login_container}>
        <h1 className={s.login_title}>Questify</h1>
        <p className={s.login_description}>
          <span>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </span>
        </p>
        <p className={s.login_text}>
          <span>Choose your name to sign up or log in Choose your name </span>
          <NavLink exact to="/singUpPage" className={s.login_text}>
            <span>to sign</span>
          </NavLink>
          <span>to sign up or log in</span>
        </p>

>>>>>>> parent of bb15132 (add spinner for all pages)
        <RegisterForm />
      </div>
      <img src={pic1} alt="background" className={s.login_loginPic} />
      <img src={pic2} alt="background" className={s.login_loginPicture} />
      <img src={bgMobile} alt="background" className={s.login_bgMobile} />
      <img src={bgMobile2} alt="background" className={s.login_bgMobile} />
    </section>
  );
};
export default LoginPage;
