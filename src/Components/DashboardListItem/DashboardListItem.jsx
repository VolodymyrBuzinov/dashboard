import React from 'react';
import PropTypes from 'prop-types';
import s from './DashboardListItem.module.scss';
import iconVector from '../../Icons/svg/Vector.svg'
console.log(iconVector);
function DashboardListItem({ title, id, time, onClick}) {
  return (<>
    <li key={id} onClick={onClick} className={s.todoItem}>
      <div className={s.todoItemСomplexity}>Сomplexity
      <div className={s.todoItemDivSvg}>
        <img className={s.todoItemSvg} src={`${iconVector}`} alt="" />
        </div>
      </div>
        <p className={s.todoItemTitle}>Title{title}</p>
        <p className={s.todoItemTime}>Time{time}</p>
      <div className={s.todoItemGroup}>GROUP</div>
    </li>
    </>
  );
};    

DashboardListItem.defaultProps = {
  data: '',
  title: '',
  id: null,
};

DashboardListItem.propTypes = {
  data: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default DashboardListItem;