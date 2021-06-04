import React from 'react';
import PropTypes from 'prop-types';
import s from './DashboardListItem.module.scss';

function DashboardListItem({ title, id, data, onClick}) {
  return (<>
    <li key={id} onClick={onClick} className={s.todoItem}>
      Сomplexity
        <p className={s.todoItemTitle}>title{title}</p>
        <p className={s.todoItemData}>data{data}</p>
      Group
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