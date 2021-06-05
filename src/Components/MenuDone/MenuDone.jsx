import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import todoSelectors from "../../Redux/Todos/todos-selectors";
import todoOperations from "../../Redux/Todos/todos-operations";
// * style
import sprite from '../../Icons/symbol-defs.svg';
import style from './MenuDone.module.scss';
import styleDashboardList from '../DashboardList/DashboardList.module.scss';


function MenuDone() {
 const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.getAllTodos);
    return <div className={style.container}>
        <input type="checkbox" className={style.check}></input>
        <div className={style.doneList}>

            <div
                className={style.spoiler}
            >
                <span>DONE</span> <svg className={style.icon}><use href={`${sprite}#icon-polygon`}></use></svg> <span className={style.dottedLine}></span>
            </div>
            <div className={style.menu}>
                {todos.map(({ title, id, data }) => (
        <ul className={styleDashboardList.todoList}>
          <DashboardListItem title={title} id={id} data={data} onClick={() => dispatch(todoOperations.deleteDashboard(id))} >
          </DashboardListItem>
        </ul>))}
                   <ul className={styleDashboardList.todoList}>
          <DashboardListItem >
          </DashboardListItem>
          <DashboardListItem >
          </DashboardListItem>
          <DashboardListItem >
          </DashboardListItem>
          <DashboardListItem >
          </DashboardListItem>
          <DashboardListItem >
          </DashboardListItem>
          <DashboardListItem >
          </DashboardListItem>
</ul>
            </div>
        </div>
    </div>
}

export default MenuDone