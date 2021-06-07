import style from './ButtonOpenModal.module.scss';
import sprite from '../../Icons/symbol-defs.svg';

const ButtonOpenModal = ({ type, title, onClick, isEdit, children }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.Btn} ${isEdit && style.visible}`}
    >
      {type === "difficulty" && (<div
        className={`${style.Btn__circle} ${type === 'difficulty' && style[title]}`}
      ></div>)}

      <span
        className={`${
          type === 'difficulty'
            ? `${style.Btn__span}  ${style[type]}`
            : style.Btn__span
        } ${isEdit && style.visible}`}
      >
        {title}
      </span>
      {isEdit && (
        <svg width="8" height="4" className={style.Btn__icon}>
          <use href={`${sprite}#icon-polygon`}></use>
        </svg>
      )}
      {children}
    </div>
  );
};
export default ButtonOpenModal;
