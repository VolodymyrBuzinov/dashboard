import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verify } from '../../Redux/Operations/authOperation';
import s from './Verify.module.scss';
import bgMobile from '../../Images/bg-mobile.png';
import bgMobile2 from '../../Images/bg-mobile2.png';
import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';
import { hideSpinner, showSpinner } from '../../Redux/Actions/loaderAction';
import getLoader from '../../Redux/Selectors/loaderSelector';
import { useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';

export default function VerifyPage() {
  const isVisibleLoader = useSelector(getLoader);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(hideSpinner());
    }, 1500);
    return () => {
      dispatch(showSpinner());
    };
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(verify(true));
  }, [dispatch]);
  setTimeout(() => {
    onLogout();
  }, 5000);
  return (
    <>
      {isVisibleLoader ? (
        <Spinner />
      ) : (
        <section className={s.login_section}>
          <div className={s.login_container}>
            <h1 className={s.login_title}>Questify</h1>
            <p className={s.login_description}>
              Congratulations, email verification was successful.
            </p>
            <p className={s.login_text}>
              in 5 seconds you will be redirected to the Home page
            </p>
          </div>
          <img src={pic1} alt="" className={s.login_loginPic} />
          <img src={pic2} alt="" className={s.login_loginPicture} />
          <img src={bgMobile} alt="" className={s.login_bgMobile} />
          <img src={bgMobile2} alt="" className={s.login_bgMobile} />
        </section>
      )}
    </>
  );
}
