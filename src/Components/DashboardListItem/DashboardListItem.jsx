import { useState, useEffect } from 'react';
import s from './DashboardListItem.module.scss';
import Button from '../Button/Button';
import TemplateTodo from '../TemplateTodo/TemplateTodo';
import Modal from '../Modal/Modal';
import ModalWindow from '../ModalWindow/ModalWindow';
import toggleModal from '../TemplateTodo/toggleModal';

function DashboardListItem({
  id,
  title,
  time,
  category,
  difficulty,
  challengeStyle,
  day
}) {
  const [challenge, setChallenge] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (challengeStyle) {
      setChallenge(true);
    }
  }, [challengeStyle]);
  const lowDifficulty = difficulty.toLowerCase();
  const lowCategory = category.toLowerCase();
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(time);
  const dayName = days[d.getDay()];

  const toggleChallenge = () => setChallenge(prev => !prev);

  return (
    <>
      {!edit ? (
        <div className={challenge ? s.todoItem__challenge : s.todoItem}>
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
          <p className={s.todoItemTime}>{day}{challenge ? ` ${dayName}` : null}, {time.slice(11)}</p>
          <div className={`${s.todoItemGroup} ${s[lowCategory]}`}>
            {category}
          </div>

          {showModalDelete && (
            <Modal
              onClose={() => toggleModal('delete', setShowModalDelete)}
              type="delete"
            >
              <ModalWindow id={id} />
            </Modal>
          )}
        </div>
      ) : (
        <TemplateTodo
          editCategory={category.toLowerCase()}
          editDifficulty={difficulty.toLowerCase()}
          editTitle={title}
          editTime={time}
          id={id}
          isEdit={true}
        />
      )}
    </>
  );
}

export default DashboardListItem;
