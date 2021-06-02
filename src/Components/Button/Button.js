import style from './Button.module.scss';

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
