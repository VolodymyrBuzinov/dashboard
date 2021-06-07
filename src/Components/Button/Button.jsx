import style from './Button.module.scss';
import sprite from '../../Icons/symbol-defs.svg';

/*  content-добавляем внутренее содержимое(текст, иконка, и т.д)
    type - указываеться тип кнопки    
    onClick-принимает функцию-обработчик события по нажатию кнопки
    isActive-показывает в режиме редактирования или нет(меняет цвет иконки)
*/
const Button = ({ content, type, onClick, isActive }) => {
  const isIcon = content.slice(0, 4) === 'icon';
  
  console.log("🚀 ~ file: Button.jsx ~ line 10 ~ Button ~ isActive", isActive)
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${style.Button} ${
          content === 'go!' ? style.go : style[content]
        } ${isActive && style.active}`}
      >
        {isIcon ? (
          <svg width="30" height="30">
            <use href={`${sprite}#${content}`}></use>
          </svg>
        ) : (
          content
        )}
      </button>
    </>
  );
};

export default Button;
