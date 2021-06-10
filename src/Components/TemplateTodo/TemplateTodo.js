import { useState } from 'react';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level/Level';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal.jsx';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers.jsx';
import InputTodo from '../InputTodo/InputTodo.jsx';
import GroupButtonSaveClearDone from '../GroupButtonSaveClearDone/GroupButtonSaveClearDone';
import toggleModal from './togleModal';
import handleChangeState from './handleChangeState';

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

const TemplateTodo = () => {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [category, setСategory] = useState(INITIAL_STATE.category);
  const [difficulty, setDifficulty] = useState(INITIAL_STATE.difficulty);
  const [time, setTime] = useState(INITIAL_STATE.time);
  const [title, setTitle] = useState(INITIAL_STATE.title);

  return (
    <li key="template" className={style.TemplateTodo}>
      <div className={style.TemplateTodo__group}>
        <div className={style.TemplateTodo__WrapperTop}>
          <div className="button">
            <ButtonOpenModal
              type="difficulty"
              title={difficulty}
              onClick={() => toggleModal('difficulty', setShowModalLevel)}
              isEdit={true}
            >
              {showModalLevel && (
                <Modal
                  onClose={() => toggleModal('difficulty', setShowModalLevel)}
                >
                  <Level
                    items={LIST_LEVEL}
                    handleClick={handleChangeState}
                    cb={setDifficulty}
                  />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>

          <div className="star">
            <Button content="icon-Vector" type="button" isActive={true} />
          </div>
        </div>

        <div className={style.TemplateTodo__WrapperMidle}>

          <InputTodo getInputText={handleChangeState} cb={setTitle} />
          <DateAndTimePickers getDate={handleChangeState} cb={setTime} />

        </div>

        <div className={style.TemplateTodo__WrapperBottom}>
          <div
            className={`${style.TemplateTodo__ButtonBgc} ${style[category]}`}
          >
            <ButtonOpenModal
              type="category"
              title={category}
              onClick={() => toggleModal('category', setShowModalCategory)}
              isEdit={true}
            >
              {showModalCategory && (
                <Modal
                  onClose={() => toggleModal('category', setShowModalCategory)}
                  type="category"
                >
                  <Category
                    items={LIST_CATEGORY}
                    handleClick={handleChangeState}
                    cb={setСategory}
                  />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>


          <div className={style.TemplateTodo__ButtonGroup}>
            <GroupButtonSaveClearDone
              isCreate={true}
              category={category}
              difficulty={difficulty}
              title={title}
              time={time}
            />
          </div>

        </div>
      </div>
    </li>
  );
};

export default TemplateTodo;
