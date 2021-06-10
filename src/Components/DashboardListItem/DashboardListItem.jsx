import { useState, useEffect } from 'react';
import s from './DashboardListItem.module.scss';

import style from '../TemplateTodo/TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ModalWindow from '../ModalWindow/ModalWindow';
import toggleModal from '../TemplateTodo/togleModal';
import TemplateTodo from '../TemplateTodo/TemplateTodo';

// function DashboardListItem({
//   title,
//   time,
//   category,
//   difficulty,
//   challengeStyle,
//   id,
//   onClick,
// }) {

const LIST_CATEGORY = [
  'stuff',
  'family',
  'health',
  'learning',
  'leisure',
  'work',
];

const LIST_LEVEL = ['easy', 'normal', 'hard'];

const INITIAL_STATE = {
  category: LIST_CATEGORY[0],
  difficulty: LIST_LEVEL[0],
  time: null,
  title: null,
};

function DashboardListItem({
  title,
  time,
  category,
  difficulty,
  children,
  challengeStyle,
  id,
}) {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  //const [category, setСategory] = useState(INITIAL_STATE.category);
  //const [difficulty, setDifficulty] = useState(INITIAL_STATE.difficulty);

  const [challenge, setChallenge] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (challengeStyle) {
      setChallenge(true);
    }
  }, []);

  const toggleChallenge = () => setChallenge(prev => !prev);

  return (
    <>
      {!edit ? (
        <div className={challenge ? s.todoItem__challenge : s.todoItem}>
          <div className={s.todoItemСomplexity}>
            {/**<div className={s.todoItemСircle}></div>
        <div className={s.todoItemDifficulty}>{difficulty}</div> */}
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
          <div className={s.todoItemGroup}>{category}</div>

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
          editCategory={category}
          editDifficulty={difficulty}
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
