import s from './UserNameText.module.scss';

const UserNameText = (name) => {
    return (
      <div>
        <span className={s.userNameText}>{name}’s Quest Log</span>
    </div>  
    )
}

export default UserNameText