import iconLogout from '../../Icons/svg/logout.svg'
import s from './ButtonLogout.module.scss'

const ButtonLogout = () => {
    return (
        <button className={s.buttonLogout}>
            <img  src={`${iconLogout}`} alt="" />
        </button>

    )
}

export default ButtonLogout