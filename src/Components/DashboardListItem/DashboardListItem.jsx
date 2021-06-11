import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './DashboardListItem.module.scss';
import Button from '../Button/Button';
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import Modal from '../Modal/Modal';
import ModalWindow from '../ModalWindow/ModalWindow';
import toggleModal from '../TemplateTodo/toggleModal';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import isEditTodo from '../../Redux/Selectors/editTodoSelector';

function DashboardListItem({
  id,
  title,
  time,
  category,
  difficulty,
  challengeStyle,
}) {
  const dispatch = useDispatch();
  const [challenge, setChallenge] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [edit, setEdit] = useState(false);

  const isEdit = useSelector(isEditTodo);

  useEffect(() => {
    if (challengeStyle) {
      setChallenge(true);
    }
  }, []);

  const lowDifficulty = difficulty.toLowerCase();
  const lowCategory = category.toLowerCase();
  const toggleChallenge = () => setChallenge(prev => !prev);

  const toggleEditCard = e => {
    if (!isEdit) {
      setEdit(true);
      dispatch(editTodo(true));
      return;
    }
    setEdit(false);
    dispatch(editTodo(false));
  };

  return (
    <>
      {!edit ? (
        <div
          className={challenge ? s.todoItem__challenge : s.todoItem}
          onClick={!isEdit && toggleEditCard}
        >
          <div className={s.todoItemСomplexity}>
            <div className={s.todoItemDiv}>
              <div className={`${s.todoItemСircle} ${s[lowDifficulty]}`}></div>
              <div className={s.todoItemDifficulty}>{difficulty}</div>
            </div>

            {challenge ? (
              <Button
                onClick={toggleChallenge}
                content="icon-trophy"
                type="button"
                isActive={true}
              />
            ) : (
              <Button
                onClick={toggleChallenge}
                content="icon-Vector"
                type="button"
                isActive={true}
              />
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
          <p className={s.todoItemTime}>{time}</p>
          <div className={`${s.todoItemGroup} ${s[lowCategory]}`}>
            {category}
          </div>

          {showModalDelete && (
            <Modal
              onClose={() => toggleModal('delete', setShowModalDelete)}
              type="delete"
            >
              <ModalWindow
                id={id}
                question={'Delete this Quest?'}
                isOpened={() => toggleModal('delete', setShowModalDelete)}
              />
            </Modal>
          )}
        </div>
      ) : (
        <>
          <div
            className={`${s.Modal__backdrop}`}
            onClick={toggleEditCard}
          ></div>
          <TemplateTodo
            editCategory={category.toLowerCase()}
            editDifficulty={difficulty.toLowerCase()}
            editTitle={title}
            editTime={time}
            id={id}
            isEdit={true}
            toggleModalDelete={() => toggleModal('delete', setShowModalDelete)}
          />
        </>
      )}
    </>
  );
}

export default DashboardListItem;
