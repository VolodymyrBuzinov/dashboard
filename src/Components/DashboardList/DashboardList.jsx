import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import s from './DashboardList.module.scss';
import DashboardListItem from "../DashboardListItem/DashboardListItem";
import todoOperations from "../../Redux/Todos/todos-operations";
import todoSelectors from "../../Redux/Todos/todos-selectors";
/*

   {todos.map(({ name, id, number }) => (
  {if today.getDay() === data.getDay()} */
export default function DashboardList() {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelectors.getAllTodos);
  
  const today = new Date();
  console.log(today);
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  console.log(tomorrow);
  if (tomorrow.getDay() === today.getDay()) {
    console.log('today!');
  } else {
    console.log('TOMORROW!');
  }
  console.log(tomorrow<today)
  console.log(tomorrow>today) 

  return (<>
    {todos.length >= 0 &&
      <div className={s.div}>
      
        TODAY
         {todos.map(({ title, id, data }) => (
        <ul className={s.list}>
          <DashboardListItem title={title} id={id} data={data} onClick={() => dispatch(todoOperations.deleteDashboard(id))} >
          </DashboardListItem>
        </ul>))}
        <ul className={s.list}>
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
    TOMORROW
      {todos.map(({ title, id, data }) => (
          <ul className={s.list}>
            <DashboardListItem title={title} id={id} data={data} onClick={() => dispatch(todoOperations.deleteDashboard(id))} >
            </DashboardListItem>
          </ul>))}
        <ul className={s.list}>
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
      </div>}
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