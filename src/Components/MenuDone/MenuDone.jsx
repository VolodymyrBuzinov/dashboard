import React from 'react';
import { useSelector } from 'react-redux';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import todoSelectors from "../../Redux/Todos/todosSelectors";
// import todoOperations from "../../Redux/Todos/todosOperations";
// * style
import sprite from '../../Icons/symbol-defs.svg';
import style from './MenuDone.module.scss';
import styleDashboardList from '../DashboardList/DashboardList.module.scss';


function MenuDone() {
//  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.getAllTodos);
    return <div className={style.container}>
        <input type="checkbox" className={style.check}></input>
        <div className={style.doneList}>

            <div
                className={style.spoiler}
            >
                <span className={styleDashboardList.todoListTitle}>DONE</span> <svg className={style.icon}><use href={`${sprite}#icon-polygon`}></use></svg> <span className={style.dottedLine}></span>
            </div>
            <div className={style.menu}>
               {todos.map(({ title, id, time, category, difficulty, done }) => (
            <ul className={styleDashboardList.todoList}>
              {done && <DashboardListItem category={category} difficulty={difficulty} title={title} id={id} time={time}>
              </DashboardListItem>}
            </ul>))}
            </div>
        </div>
    </div>
}

export default MenuDone