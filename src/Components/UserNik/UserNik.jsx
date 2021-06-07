import s from './UserNik.module.scss';

const UserNik = ({ nickName }) => {
  return <div className={s.nickContainer}>
    {nickName}
    </div>;
};

export default UserNik;
