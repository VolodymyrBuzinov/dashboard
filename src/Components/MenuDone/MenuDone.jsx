import React from 'react';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
// * style
import sprite from '../../Icons/symbol-defs.svg';
import style from './MenuDone.module.scss';
import styleDashboardList from '../DashboardList/DashboardList.module.scss';


function MenuDone({todos}) {
    return <div className={style.container}>
        <input type="checkbox" className={style.check}></input>
        <div className={style.doneList}>

            <div
                className={style.spoiler}
            >
                <span className={styleDashboardList.todoListTitle}>DONE</span> <svg className={style.icon}><use href={`${sprite}#icon-polygon`}></use></svg> <span className={style.dottedLine}></span>
            </div>
            <div className={style.menu}>
                <ul className={styleDashboardList.todoList}>
               {todos.map(({ title, _id, time, category, difficulty }) => (
             <DashboardListItem category={category} difficulty={difficulty} title={title} id={_id} time={time}>
              </DashboardListItem>
            ))}
            </ul>
            </div>
        </div>
    </div>
}

export default MenuDone