import exp from '../../Redux/Operations/todosOperations';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import style from './CardDone.module.scss';
import sprite from '../../Icons/symbol-defs.svg';

function CardDone({ id, titleTodo = 'title' }) {
  const dispatch = useDispatch();

  let titleTodoShort;
  if (titleTodo.length > 12) {
    let titleTodoSlice = titleTodo.split('');
    titleTodoSlice.length = 12;
    titleTodoShort = titleTodoSlice.join('') + '...';
  }
  if (titleTodo.length <= 12) {
    titleTodoShort = titleTodo;
  }

  const handleClickElementDone = id => {
    dispatch(
      exp.updateTodoStatusDone({
        id,
        done: true,
      }),
    );
    dispatch(editTodo(false));
  };

  return (
    <div id={`cardDone-${id}`} className={`${style.cardDone}`} hidden={true}>
      <h3 className={style.title}>
        COMPLETED: <span className={style.textTitle}>{titleTodoShort}</span>
      </h3>
      <svg className={style.iconFon}>
        <use href={`${sprite}#icon-award`}></use>
      </svg>
      <button
        type="button"
        onClick={() => handleClickElementDone(id)}
        className={style.btnContinue}
      >
        Continue{' '}
        <svg className={style.iconArrow}>
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </button>
    </div>
  );
}

export default CardDone;
