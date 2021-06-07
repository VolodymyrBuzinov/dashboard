import s from './UserNik.module.scss';

const UserNik = ({ nickName }) => {
  return <div className={s.nickButton}>{nickName}</div>;
};

export default UserNik;
