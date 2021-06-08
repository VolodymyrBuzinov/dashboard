import { useSelector } from 'react-redux';
import s from './HeaderPage.module.scss';

import ButtonLogout from '../ButtonLogout/ButtonLogout';
import UserNameText from '../UserNameText/UserNameText';
import UserNick from '../UserNick/UserNick';
import { getUserName } from '../../Redux/Selectors/authSelectors';

const HeaderPage = () => {
  const name = useSelector(getUserName);

  let letter = '';
  if (name) {
    letter = name.slice(0, 1).toUpperCase();
  }

  return (
    <header>
      <div className={s.headerContainer}>
        <div className={s.headerLogoContainer}>
          <p className={s.headerLogoText}>Questify</p>
        </div>
        <div className={s.userContainer}>
          <UserNick nickName={letter} />
          <UserNameText name={name} />
        </div>
        <ButtonLogout />
      </div>
    </header>
  );
};

export default HeaderPage;
