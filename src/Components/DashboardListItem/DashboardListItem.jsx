import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DashboardListItem.module.scss';
import Button from '../Button/Button';
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import isEditTodo from '../../Redux/Selectors/editTodoSelector';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import { toast } from 'react-toastify';
import Fire from '../../Icons/svg/fire.svg';

function DashboardListItem({
  id,
  title,
  time,
  category,
  difficulty,
  challengeStyle,
  day,
  done,
  hot
}) {
  const dispatch = useDispatch();
  const [challenge, setChallenge] = useState(false);
  const [edit, setEdit] = useState(false);
  const isEdit = useSelector(isEditTodo);
  const isVisible = useSelector(isVisibleTemplate);

  useEffect(() => {
    if (challengeStyle) {
      setChallenge(true);
    }
  }, [challengeStyle]);

  const lowDifficulty = difficulty.toLowerCase();
  const lowCategory = category.toLowerCase();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date(time);
  const dayName = days[d.getDay()];

  // const toggleChallenge = () => {
  //   if (done) {
  //     return;
  //   }
  //   setChallenge(prev => !prev);
  // };

  const onOpenEditCard = e => {
    if (done) {
      return;
    }
    if (isVisible) {
      // console.log('Закончить создание карточки');
      toast.warning('Finish card creation');
      return;
    }
    if (isEdit) {
      if (e.target.tagName === 'DIV' || e.target.tagName === 'P') {
        //console.log('Закончить редактирование карточки');
        toast.warning('Finish editing the card');
      }
      return;
    }
    if (done) return;

    setEdit(true);
    dispatch(editTodo(true));
  };

  const onCloseEditCard = () => {
    setEdit(false);
    dispatch(editTodo(false));
  };

  return (
    <>
      {!edit ? (
        <div
          className={challenge ? s.todoItem__challenge : s.todoItem}
          onClick={onOpenEditCard}
        >
          <div className={s.todoItemСomplexity}>
            <div className={s.todoItemDiv}>
              <div className={`${s.todoItemСircle} ${s[lowDifficulty]}`}></div>
              <div className={s.todoItemDifficulty}>{difficulty}</div>
            </div>
            {challenge ? (
              <Button content="icon-trophy" type="button" isEdit={!edit} />
            ) : (
              <Button content="icon-Vector" type="button" isEdit={!edit} />
            )}
          </div>
          <p
            className={
              challenge ? s.todoItemChallenge__challenge : s.todoItemChallenge
            }
          >
            CHALLENGE
          </p>
          <p
            className={challenge ? s.todoItemTitle__challenge : s.todoItemTitle}
          >
            {title}
          </p>
          <p className={s.todoItemTime}>
            {done ? time.slice(0, 10) : null ||challenge ? `${day} ${dayName}` : null || day}
            , {time.slice(11)}
            {hot ? <img className={s.todoItemFire} src={Fire} alt='fire!!!' /> : null}
          </p>
          <div className={`${s.todoItemGroup} ${s[lowCategory]}`}>
            {category}
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${s.Modal__backdrop}`}
            onClick={onCloseEditCard}
          ></div>
          <TemplateTodo
            editCategory={category.toLowerCase()}
            editDifficulty={difficulty.toLowerCase()}
            editTitle={title}
            editTime={time}
            id={id}
            isEdit={isEdit}
            changeEdit={setEdit}
            isChallenge={challenge}
            day={day}
            dayName={dayName}
          />
        </>
      )}
    </>
  );
}

export default DashboardListItem;
