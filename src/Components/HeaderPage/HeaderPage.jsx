import {useSelector} from 'react-redux'
import s from './HeaderPage.module.scss';

import ButtonLogout from '../ButtonLogout/ButtonLogout';
import UserNameText from '../UserNameText/UserNameText';
import UserNik from '../UserNik/UserNik';
import {getUserName} from '../../Redux/Selectors/authSelectors'

const HeaderPage = () => {
 
  const name = useSelector(getUserName);
  let nik = '';
  if (name) {
   nik = name[0].toUpperCase();
  }
 
  return (
    <header>
      <div className={s.headerContainer}>
        <div className={s.headerLogoContainer}>
          <p className={s.headerLogoText}>Questify</p>
        </div>
        <div className={s.userContainer}>
          <UserNik nikName = {nik} />
          <UserNameText name ={name} />
        </div>
        <ButtonLogout />
      </div>
    </header>
  );
};

export default HeaderPage;
