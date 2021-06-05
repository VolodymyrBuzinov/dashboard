import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import s from './DashboardList.module.scss';
import DashboardListItem from "../DashboardListItem/DashboardListItem";
import todoOperations from "../../Redux/Todos/todosOperations";
import todoSelectors from "../../Redux/Todos/todosSelectors";
import MenuDone from '../MenuDone/MenuDone.jsx';

const DashboardList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoOperations.fetchTodos())
  },
  [dispatch])
  const todos = useSelector(todoSelectors.getAllTodos);

  const today = new Date();
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  if (tomorrow.getDay() === today.getDay()) {
  // console.log('TODAY!');
  } else {
  // console.log('TOMORROW!');
  }
  /**{ time.getDay() === tomorrow.getDay() ? alert('TOMORROW!'): alert(' No TOMORROW!') } */
  /*  {if time.getDay() === today.getDay()}
  {if time.getDay() === tomorrow.getDay()} */
  
  return (<>
    <main className={s.todoListMain}>
      
      {todos.length > 0 && (
        <div className={s.todoListDiv}>
        <p className={s.todoListTitle}>TODAY</p>
          {todos.map(({ title, id, time, category, difficulty }) => (
            <ul className={s.todoList}>
              <DashboardListItem category={category} difficulty={difficulty} title={title} id={id} time={time}>
              </DashboardListItem>
            </ul>))}
        <p className={s.todoListTitle}>TOMORROW</p>
          {/* // * DONE */}
          <MenuDone />
        </div>)}
      </main>
    </>
  );
}

DashboardList.defaultProps = {
  dashboards: [],
};

DashboardList.propTypes = {
  dashboards: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string.isRequired
  }
  ))
};

export default DashboardList;