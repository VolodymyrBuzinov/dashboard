import style from './ButtonOpenModal.module.scss';
import sprite from '../../Icons/symbol-defs.svg';

const ButtonOpenModal = ({ type, title, onClick, children }) => {
  return (
    <div onClick={onClick} className={`${style.Btn} ${style[type]}`}>
      {type === 'level' && (
        <div className={`${style.Btn__circle} ${style[title]}`}></div>
      )}
      <span
        className={
          type === 'level'
            ? `${style.Btn__span} ${style[type]}`
            : style.Btn__span
        }
      >
        {title}
      </span>
      <svg width="8" height="4" className={style.Btn__icon}>
        <use href={`${sprite}#icon-polygon`}></use>
      </svg>
      {children}
    </div>
  );
};
export default ButtonOpenModal;
