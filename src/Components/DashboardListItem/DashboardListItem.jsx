import { useState, useEffect } from 'react';
import s from './DashboardListItem.module.scss';

import style from '../TemplateTodo/TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level/Level';
import handleChangeState from '../TemplateTodo/handleChangeState';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal.jsx';
import toggleModal from '../TemplateTodo/togleModal';



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


function DashboardListItem({ title, time, category, difficulty,
  children, challengeStyle }) {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  //const [category, setСategory] = useState(INITIAL_STATE.category);
  //const [difficulty, setDifficulty] = useState(INITIAL_STATE.difficulty);
  const [challenge, setChallenge] = useState(false);
  useEffect(() => {
   if (challengeStyle) {
    setChallenge(true);
  }
  }, []);
  
  const toggleChallenge = () => setChallenge(prev => !prev);

  return (
    <>
      {/*<TemplateTodo
          category={category}
          difficulty={difficulty}
          title={title}
          time={time}
          {children}
    />*/}
      <div className={challenge ? s.todoItem__challenge : s.todoItem} >
        <div className={s.todoItemСomplexity}>
          <ButtonOpenModal
              type="difficulty"
              title={difficulty}
              onClick={() => toggleModal('difficulty', setShowModalLevel)}
              isEdit={true}
            > </ButtonOpenModal>
     {/**<div className={s.todoItemСircle}></div>
        <div className={s.todoItemDifficulty}>{difficulty}</div> */} 
        {challenge ? (
              <Button
                onClick={toggleChallenge}
                content="icon-trophy"
                type="button"
            
              />
            ) : (
              <Button
                onClick={toggleChallenge}
                content="icon-Vector"
                type="button"
             
              />
            )}
      </div>
      <p className={challenge ? s.todoItemChallenge__challenge : s.todoItemChallenge}>CHALLENGE</p>
      <p className={challenge ? s.todoItemTitle__challenge : s.todoItemTitle}>{title}</p>
        <p className={s.todoItemTime}>{time}</p>
        <div
            className={`${style.TemplateTodo__ButtonBgc} ${style[category]}`}
          >
            <ButtonOpenModal
              type="category"
              title={category}
              onClick={() => toggleModal('category', setShowModalCategory)}
              isEdit={true}
            ></ButtonOpenModal>
          {/*<div className={s.todoItemGroup}>{category}
      </div>*/}</div>
    </div>
    </>
  );
}

export default DashboardListItem;
