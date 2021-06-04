import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import s from './DashboardList.module.scss';
import DashboardListItem from "../DashboardListItem/DashboardListItem";
import todoOperations from "../../Redux/Todos/todos-operations";
import todoSelectors from "../../Redux/Todos/todos-selectors";

export default function DashboardList() {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.getAllTodos);
  // console.log('todos', todos);

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
        TODAY
        {todos.map(({ title, id, time }) => (
        <ul className={s.todoList}>
          <DashboardListItem title={title} id={id} time={time} onClick={() => dispatch(todoOperations.deleteDashboard(id))} >
          </DashboardListItem>
        </ul>))}
        <ul className={s.todoList}>
          <DashboardListItem >
          </DashboardListItem>
        </ul>
    TOMORROW
      {todos.map(({ title, id, data }) => (
          <ul className={s.todoList}>
            <DashboardListItem title={title} id={id} data={data} onClick={() => dispatch(todoOperations.deleteDashboard(id))} >
            </DashboardListItem>
          </ul>))}
          <ul className={s.todoList}>
          <DashboardListItem >
          </DashboardListItem>
        </ul>
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