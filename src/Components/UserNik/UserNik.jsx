import { NavLink } from 'react-router-dom';
import s from './UserNik.module.scss';

const UserNik = ({nik}) => {
    return (
        <button className={s.nikButton}>{nik}</button>
    )
}

export default UserNik