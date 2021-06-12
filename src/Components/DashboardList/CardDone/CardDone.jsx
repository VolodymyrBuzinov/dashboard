import style from './CardDone.module.scss';
import sprite from '../../../Icons/symbol-defs.svg';

// import getShowCardDone from "./getShowCardDone"
// import getHiddenCardDone from "./getHiddenCardDone"

import exp from '../../../Redux/Operations/todosOperations';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../../Redux/Actions/editTodo-action';

function CardDone({ id, titleTodo = 'title' }) {
  const dispatch = useDispatch();

  let titleTodoShort;
  // ? если длина заголовка больше 12 - обрезаем и добавляем ...
  if (titleTodo.length > 12) {
    let titleTodoSlice = titleTodo.split('');
    titleTodoSlice.length = 12;
    titleTodoShort = titleTodoSlice.join('') + '...';
  }
  if (titleTodo.length <= 12) {
    titleTodoShort = titleTodo;
  }

  const handleClickElementDone = id => {
    console.log('run handleClickElementDone');
    console.log({
      id,
      done: true,
    });

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

      {/* кнопки для тестов */}
    </div>
  );
}

export default CardDone;
