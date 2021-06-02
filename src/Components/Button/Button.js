import style from './Button.module.scss';

/*  content-добавляем внутренее содержимое(текст, иконка, и т.д)
    isFixed-принимает true или false, меняет расположение кнопки
            на фиксированное положение на экране
    onClick-принимает функцию-обработчик события по нажатию кнопки
*/
const Button = ({ content, isFixed, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${style.Button} ${isFixed && style.fixed}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
