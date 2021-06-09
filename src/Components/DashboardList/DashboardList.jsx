import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DashboardList.module.scss';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import todoOperations from '../../Redux/Operations/todosOperations';
import todoSelectors from '../../Redux/Selectors/todosSelectors';
import MenuDone from '../MenuDone/MenuDone';
import EmptyTodos from "../EmptyTodos/EmptyTodods";
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import isEdit from '../../Redux/Selectors/editTodoSelector';

const DashboardList = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(isVisibleTemplate);
  const edit = useSelector(isEdit);

  useEffect(() => {
    dispatch(todoOperations.fetchTodos());
  }, [dispatch, isVisible, edit]);
  const todos = useSelector(todoSelectors.getAllTodos);

  const onClick = () => {
    if (edit) return;
    dispatch(onClickBtnCreate(true));
  };

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const todayList = [];
  const tomorrowList = [];
  const doneList = [];
  const challengeList = [];
  
  todos.map(todo => {
    if (!todo.done) {
      if (!todo.challenge) {
        if (
          today.getFullYear() ===  new Date(Date.parse(todo.time)).getFullYear() &&
          today.getMonth() === new Date(Date.parse(todo.time)).getMonth() &&
          today.getDay() === new Date(Date.parse(todo.time)).getDay()
        ) {
          todayList.push(todo);
        }
        if (
          tomorrow.getFullYear() === new Date(Date.parse(todo.time)).getFullYear() &&
          tomorrow.getMonth() === new Date(Date.parse(todo.time)).getMonth() &&
          tomorrow.getDay() === new Date(Date.parse(todo.time)).getDay()
        ) {
          tomorrowList.push(todo);
        }
      } else {
        challengeList.push(todo); 
      }
    } else {
      doneList.push(todo); 
    }
    return { todayList, tomorrowList, doneList };
  });
  
  return (
    <>
      <main className={s.todoListMain}>
        <div className={s.todoListDiv}>
          {todayList.length===0 && tomorrowList.length===0 && challengeList.length===0 && !isVisible && <>
          <EmptyTodos/>
          </>}
          {todayList.length > 0 || isVisible ? (
            <>
              <p className={s.todoListTitle}>TODAY</p>
              <ul className={s.todoList}>
                {isVisible && (
                  <DashboardListItem key="template">
                    <TemplateTodo isVisible={isVisible} />
                  </DashboardListItem>
                )}
                {todayList.length > 0 &&
                  todayList.map(
                    ({ title, _id, time, category, difficulty, challenge }) => (
                      <DashboardListItem key={_id}>
                        <TemplateTodo
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          challenge={challenge}
                          id={_id}
                        />
                      </DashboardListItem>
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
                    <DashboardListItem key={_id}>
                      <TemplateTodo
                        category={category}
                        difficulty={difficulty}
                        title={title}
                        time={time}
                        challenge={challenge}
                      />
                    </DashboardListItem>
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
                      <DashboardListItem key={_id}>
                        <TemplateTodo
                        category={category}
                        difficulty={difficulty}
                        title={title}
                        time={time}
                        challenge={challenge}
                      />
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
