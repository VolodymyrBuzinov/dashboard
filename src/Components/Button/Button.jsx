import style from './Button.module.scss';
import sprite from '../../Icons/symbol-defs.svg'

/*  content-добавляем внутренее содержимое(текст, иконка, и т.д)
    type - указываеться тип кнопки
    isFixed-принимает true или false, меняет расположение кнопки
            на фиксированное положение на экране
    onClick-принимает функцию-обработчик события по нажатию кнопки
*/
const Button = ({ content, type, isFixed, onClick }) => {
  
  const isIcon = content.slice(0,4) === 'icon' 

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${style.Button} ${isFixed && style.fixed} ${!isIcon && style.text}`}
      >
        
        {isIcon ? (<svg width="30" height="30">          
          <use href={`${sprite}#${content}`} ></use>
        </svg>): content}
        
      </button>
    </>
  );
};

export default Button;
