import s from './UserNick.module.scss';

const UserNik = ({ nickName }) => {
  return <div className={s.nickContainer}>
    {nickName}
    </div>;
};

export default UserNik;
