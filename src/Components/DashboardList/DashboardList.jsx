import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import s from './DashboardList.module.scss';
import DashboardListItem from "../DashboardListItem/DashboardListItem";
//import todoOperations from "../../Redux/Todos/todosOperations";
import todoSelectors from "../../Redux/Todos/todosSelectors";

const DashboardList = () => {
  const todos = useSelector(todoSelectors.getAllTodos);
  console.log('todos', todos);

  const today = new Date();
  // console.log(today);
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  // console.log(tomorrow);
  if (tomorrow.getDay() === today.getDay()) {
  // console.log('TODAY!');
  } else {
  // console.log('TOMORROW!');
  }
  
  /*  {if time.getDay() === today.getDay()}
  {if time.getDay() === tomorrow.getDay()} */
  
  return (<>
    <main className={s.todoListMain}>
    {todos.length >= 0 && (
      <div className={s.todoListDiv}>
        <p className={s.todoListTitle}>TODAY</p>
        {todos.map(({ title, id, time }) => (
          <ul className={s.todoList}>
            <DashboardListItem title={title} id={id} time={time}>
            </DashboardListItem>
          </ul>))}
          <DashboardListItem >
          </DashboardListItem>
        <p className={s.todoListTitle}>TOMORROW</p>
        {todos.map(({ title, id, data }) => (
          <ul className={s.todoList}>
            <DashboardListItem title={title} id={id} data={data}>
            </DashboardListItem>
          </ul>))}
          <DashboardListItem >
          </DashboardListItem>
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