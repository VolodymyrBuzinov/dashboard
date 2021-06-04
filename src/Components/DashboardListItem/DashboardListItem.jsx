import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardListItem.module.scss';

function DashboardListItem({ title, id, data, onClick}) {
  return (<>
    <li key={id} onClick={onClick} className={styles.item}>
      Сomplexity
        <p className={styles.title}>title{title}</p>
        <p className={styles.data}>data{data}</p>
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