import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todoOperations from '../../Redux/Operations/todosOperations';
import todoSelectors from '../../Redux/Selectors/todosSelectors';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import s from './DashboardList.module.scss';
import sorter from '../DashboardList/sorter';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import MenuDone from '../MenuDone/MenuDone';
import EmptyTodos from '../EmptyTodos/EmptyTodods';
import TemplateTodo from '../TemplateTodo/TemplateTodo';
// import Button from '../Button/Button';
import CardDone from './CardDone/CardDone';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import transition from './anim.module.scss';

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

  return (
    <>
      <main className={s.todoListMain}>
        <div className={s.todoListDiv}>
          <p className={s.todoListTitle}>TODAY</p>
          <CSSTransition
            in={
              todayList.length === 0 &&
              tomorrowList.length === 0 &&
              challengeList.length === 0 &&
              !isVisible
            }
            appear
            timeout={300}
            classNames={s}
            unmountOnExit
          >
            <EmptyTodos />
          </CSSTransition>
          {todayList.length > 0 || isVisible ? (
            <CSSTransition
              in={todayList.length > 0 || isVisible}
              appear
              timeout={300}
              classNames={transition}
              unmountOnExit
            >
              <>
                <TransitionGroup component="ul" className={s.todoList}>
                  {isVisible && (
                    <CSSTransition
                      timeout={300}
                      classNames={s}
                      unmountOnExit
                      key="temlpate"
                    >
                      <li>
                        <TemplateTodo />
                      </li>
                    </CSSTransition>
                  )}
                  {todayList.length > 0 &&
                    todayList.map(
                      ({
                        title,
                        _id,
                        time,
                        category,
                        difficulty,
                        challenge,
                      }) => (
                        <CSSTransition
                          timeout={300}
                          classNames={s}
                          unmountOnExit
                          key={_id}
                        >
                          <li>
                            <CardDone id={_id} titleTodo={title} />
                            <DashboardListItem
                              category={category}
                              difficulty={difficulty}
                              title={title}
                              time={time}
                              id={_id}
                              day="Today"
                              challengeStyle={challenge}
                            />
                          </li>
                        </CSSTransition>
                      ),
                    )}
                </TransitionGroup>
              </>
            </CSSTransition>
          ) : null}
          {tomorrowList.length > 0 ? (
            <>
              <p className={s.todoListTitle}>TOMORROW</p>
              <TransitionGroup component="ul" className={s.todoList}>
                {tomorrowList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <CSSTransition
                      timeout={300}
                      classNames={s}
                      unmountOnExit
                      key={_id}
                    >
                      <li>
                        <CardDone id={_id} titleTodo={title} />
                        <DashboardListItem
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          id={_id}
                          day="Tomorrow"
                          challengeStyle={challenge}
                        />
                      </li>
                    </CSSTransition>
                  ),
                )}
              </TransitionGroup>
            </>
          ) : null}
          {challengeList.length > 0 ? (
            <>
              <p className={s.todoListTitle}>CHALLENGES</p>
              <TransitionGroup component="ul" className={s.todoList}>
                {challengeList.map(
                  ({ title, _id, time, category, difficulty, challenge }) => (
                    <CSSTransition
                      timeout={300}
                      classNames={s}
                      unmountOnExit
                      key={_id}
                    >
                      <li>
                        <CardDone id={_id} titleTodo={title} />
                        <DashboardListItem
                          category={category}
                          difficulty={difficulty}
                          title={title}
                          time={time}
                          id={_id}
                          day="By"
                          challengeStyle={challenge}
                        />
                      </li>
                    </CSSTransition>
                  ),
                )}
              </TransitionGroup>
            </>
          ) : null}
          <MenuDone todos={doneList} />
        </div>
      </main>
    </>
  );
};

export default DashboardList;
