import React from 'react';
import PropTypes from 'prop-types';
import s from './DashboardListItem.module.scss';

function DashboardListItem({ title, id, time, onClick}) {
  return (<>
    <li key={id} onClick={onClick} className={s.todoItem}>
      <div className={s.todoItemСomplexity}>Сomplexity</div>
        <p className={s.todoItemTitle}>title{title}</p>
        <p className={s.todoItemTime}>time{time}</p>
      <div className={s.todoItemGroup}>Group</div>
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