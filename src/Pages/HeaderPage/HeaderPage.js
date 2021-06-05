import s from './HeaderPage.module.scss';

import ButtonLogout from '../../Components/ButtonLogout/ButtonLogout';
import UserNameText from '../../Components/UserNameText/UserNameText';
import UserNik from '../../Components/UserNik/UserNik';

const HeaderPage = () => {
  return (
    <header>
      <div className={s.headerContainer}>
        <div className={s.headerLogoContainer}>
          <p className={s.headerLogoText}>Questify</p>
        </div>
        <div className={s.userContainer}>
          <UserNik />
          <UserNameText />
        </div>
        <ButtonLogout />
      </div>
    </header>
  );
};

export default HeaderPage;
