import style from "./CardDone.module.scss"
import sprite from '../../../Icons/symbol-defs.svg';

import getShowCardDone from "./getShowCardDone"
import getHiddenCardDone from "./getHiddenCardDone"

function CardDone({ id, titleTodo = "title" }) {
    let titleTodoShort
    // ? если длина заголовка больше 15 - обрезаем и добавляем ...
    if(titleTodo.length>15){let titleTodoSlice = titleTodo.split("")
    titleTodoSlice.length = 15
    titleTodoShort = titleTodoSlice.join('') + "..."
    }
    if (titleTodo.length <= 15) {
       titleTodoShort = titleTodo
    }
    
    
    return <div id={`cardDone-${id}`} className={`${style.cardDone}`} hidden>
        <h3 className={style.title}>COMPLETED: <span className={style.textTitle}>{titleTodoShort}</span></h3>
        <svg className={style.iconFon}><use href={`${sprite}#icon-award`}></use></svg>
        <button type="button" className={style.btnContinue}>Continue <svg className={style.iconArrow}><use href={`${sprite}#icon-arrow`}></use></svg></button>

        {/* кнопки для тестов */}
        <button type="button" onClick={()=>getHiddenCardDone(id)}>HIDDEN</button>
        <button type="button" onClick={()=>getShowCardDone(id)}>SHOW</button>
    </div>
}

export default CardDone