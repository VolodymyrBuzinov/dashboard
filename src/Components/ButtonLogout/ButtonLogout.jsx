import { useDispatch } from 'react-redux';
// import iconLogout from '../../Icons/svg/logout.svg';
import s from './ButtonLogout.module.scss';
import { logOutAuth } from '../../Redux/Operations/authOperation';
import sprite from '../../Icons/symbol-defs.svg';

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOutAuth());
  };
  return (
    <button className={s.buttonLogout} onClick={() => onLogout()}>
      <svg className={s.icon} width="22px" height="17px">
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
    </button>
  );
};

export default ButtonLogout;
