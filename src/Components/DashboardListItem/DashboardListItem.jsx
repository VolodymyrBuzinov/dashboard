import React from 'react';
import s from './DashboardListItem.module.scss';
import iconVector from '../../Icons/svg/Vector.svg'

function DashboardListItem({ title, id, time, category, difficulty, onClick}) {
  return (<>
    <li key={id} onClick={onClick} className={s.todoItem}>
      <div className={s.todoItemСomplexity}>{difficulty}
        <img className={s.todoItemSvg} src={`${iconVector}`} alt="" />
      </div>
        <p className={s.todoItemTitle}>{title}</p>
        <p className={s.todoItemTime}>{time}</p>
      <div className={s.todoItemGroup}>{category}
      </div>
    </li>
    </>
  );
};    

export default DashboardListItem;