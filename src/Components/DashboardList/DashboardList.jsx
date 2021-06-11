import {
  useEffect,
  //useState
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todoOperations from '../../Redux/Operations/todosOperations';
import todoSelectors from '../../Redux/Selectors/todosSelectors';
//import { editTodo } from '../../Redux/Actions/editTodo-action';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import isEdit from '../../Redux/Selectors/editTodoSelector';

import s from './DashboardList.module.scss';
import sorter from '../DashboardList/sorter';

import DashboardListItem from '../DashboardListItem/DashboardListItem';
import MenuDone from '../MenuDone/MenuDone';
import EmptyTodos from '../EmptyTodos/EmptyTodods';
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import Button from '../Button/Button';
import CardDone from './CardDone/CardDone';

const DashboardList = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector(isVisibleTemplate);

  useEffect(() => {
    dispatch(todoOperations.fetchTodos());
  }, [dispatch]);
  const todos = useSelector(todoSelectors.getAllTodos);

  //const handleEdit = () => {};

  const todayList = [];
  const tomorrowList = [];
  const doneList = [];
  const challengeList = [];

  sorter(todos, todayList, tomorrowList, doneList, challengeList);

/*  console.log("todayList", todayList);
  console.log("tomorrowList", tomorrowList);
  console.log("doneList", doneList);
  console.log("challengeList", challengeList);*/
  
  return (
    <>
      <main className={s.todoListMain}>
        <div className={s.todoListDiv}>
          {todayList.length === 0 &&
            tomorrowList.length === 0 &&
            challengeList.length === 0 &&
            !isVisible && (
                <EmptyTodos />
            )}
          {todayList.length > 0 || isVisible ? (
            <>
              <p className={s.todoListTitle}>TODAY</p>
              <ul className={s.todoList}>
                {isVisible && (
                  <li key="temlpate">
                    <TemplateTodo isVisible={isVisible} />
                    </li>
                )}
                {todayList.length > 0 &&
                  todayList.map(
                    ({ title, _id, time, category, difficulty, challenge }) => (
                      <li key={_id} className={s.itemTodo}>
                        <CardDone id={_id} titleTodo={title}/>
                        <DashboardListItem
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          id={_id}
                          day='Today'
                          challengeStyle={challenge}/>
                      </li>
                    ),
                  )}
              </ul>
            </>
          ) : null}
          {tomorrowList.length > 0 ? (
            <>
              <p className={s.todoListTitle}>TOMORROW</p>
              <ul className={s.todoList}>
                {tomorrowList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <li key={_id} className={s.itemTodo}>
                        <CardDone id={_id} titleTodo={title}/>
                        <DashboardListItem 
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                        id={_id}
                        day='Tomorrow'
                          challengeStyle={challenge}/>
                      </li>
                  ),
                )}
              </ul>
            </>
          ) : null}
          {challengeList.length > 0 ? (
            <>
              <p className={s.todoListTitle}>CHALLENGES</p>
              <ul className={s.todoList}>
                {challengeList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <li key={_id} className={s.itemTodo}>
                      <CardDone id={_id} titleTodo={title}/>
                      <DashboardListItem
                        category={category}
                        difficulty={difficulty}
                        title={title}
                        time={time}
                        id={_id}
                        day='By'
                        challengeStyle={challenge}
                      />
                    </li>
                  ),
                )}
              </ul>
            </>
          ) : null}
          <MenuDone todos={doneList} />
        </div>
      </main>
    </>
  );
};

export default DashboardList;
/**<div
        className={
          challenge
            ? `${style.TemplateTodo__challenge} ${style.TemplateTodo__group}`
            : style.TemplateTodo__group
        }
      > 
      <div className="star">
            {challenge ? (
              <Button
                onClick={!isVisible && !edit && toggleChallenge}
                content="icon-trophy"
                type="button"
                isActive={true}
              />
            ) : (
              <Button
                onClick={!isVisible && !edit && toggleChallenge}
                content="icon-Vector"
                type="button"
                isActive={!edit}
              />
            )}
            
          </div>*/
