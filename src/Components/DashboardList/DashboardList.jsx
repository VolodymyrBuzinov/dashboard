import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import todoOperations from '../../Redux/Operations/todosOperations';
import todoSelectors from '../../Redux/Selectors/todosSelectors';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import isEdit from '../../Redux/Selectors/editTodoSelector';

import s from './DashboardList.module.scss';
import sorter from './sorter'

import DashboardListItem from '../DashboardListItem/DashboardListItem';
import MenuDone from '../MenuDone/MenuDone';
import EmptyTodos from "../EmptyTodos/EmptyTodods";
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import Button from '../Button/Button';

const DashboardList = () => {
  const dispatch = useDispatch();
  
  const isVisible = useSelector(isVisibleTemplate);
  const edit = useSelector(isEdit);

  useEffect(() => {
    dispatch(todoOperations.fetchTodos());
  }, [dispatch]);
  const todos = useSelector(todoSelectors.getAllTodos);

  const onClick = () => {
    if (edit) return;
    dispatch(onClickBtnCreate(true));
  };

  const todayList = [];
  const tomorrowList = [];
  const doneList = [];
  const challengeList = [];
 
  sorter(todos, todayList, tomorrowList, doneList, challengeList);
  /*console.log("todayList", todayList);
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
           !isVisible && <>
          <EmptyTodos/>
          </>}
          {todayList.length > 0 || isVisible ? (
            <>
              <p className={s.todoListTitle}>TODAY</p>
              <ul className={s.todoList}>
                {isVisible && (
                  <TemplateTodo isVisible={isVisible} />
                )}
                {todayList.length > 0 &&
                  todayList.map(
                    ({ title, _id, time, category, difficulty, challenge }) => (
                      <li key={_id}>
                        <DashboardListItem category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          challengeStyle={challenge}>
                      </DashboardListItem>
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
                    <li key={_id}>
                        <DashboardListItem category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          challengeStyle={challenge}>
                      </DashboardListItem>
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
                    <li key={_id}>
                        <DashboardListItem category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          challengeStyle={challenge}>
                      </DashboardListItem>
                      </li>
                  ),
                )}
              </ul>
            </>
          ) : null}
          <MenuDone todos={doneList} />
        </div>
        <Button content="icon-plus" type="button" onClick={onClick} />
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
