import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal';
import sprite from '../../Icons/symbol-defs.svg';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers';
import InputTodo from '../InputTodo/InputTodo';

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
  level: LIST_LEVEL[0],
};

const TemplateTodo = ({ category }) => {
  const dispatch = useDispatch();
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);

  const onclick = () => dispatch(onClickBtnCreate(true));

  const toggleModalCategory = useCallback(() => {
    setShowModalCategory(prev => !prev);
  }, []);

  const toggleModalLevel = useCallback(() => {
    setShowModalLevel(prev => !prev);
  }, []);

  const handleClickElement = e => {
    const { type, name } = e.target.dataset;
    setState(prevState => ({
      ...prevState,
      [type]: name,
    }));
  };

  return (
    <>
      <div className={style.TemplateTodo__group}>
        <div className={style.TemplateTodo__WrapperTop}>
          <div className="button">
            <ButtonOpenModal
              type="level"
              title={state.level}
              onClick={toggleModalLevel}
            >
              {showModalLevel && (
                <Modal onClose={toggleModalLevel} type="level">
                  <Level items={LIST_LEVEL} handleClick={handleClickElement} />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>

          <div className="star">
            <button className={style.TemplateTodo__ButtonStar}>
              <svg width="15" height="15" className={style.Btn__icon}>
                <use href={`${sprite}#icon-Vector`}></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={style.TemplateTodo__WrapperMidle}>
          <InputTodo getInputText={setState} />
          <DateAndTimePickers getDate={setState} />
        </div>

        <div className={style.TemplateTodo__WrapperBottom}>
          <div
            className={`${style.TemplateTodo__ButtonBgc} ${style[category]}`}
          >
            <ButtonOpenModal
              type="category"
              title={category}
              onClick={toggleModalCategory}
            >
              {showModalCategory && (
                <Modal onClose={toggleModalCategory} type="category">
                  <Category
                    items={LIST_CATEGORY}
                    handleClick={handleClickElement}
                  />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>
          <div
            className="Selectors"
            style={{ outline: '1px solid', width: '68px', height: '16px' }}
          ></div>
        </div>
      </div>

      <Button
        content="icon-plus"
        type="button"
        isFixed="true"
        onClick={onclick}
      />
    </>
  );
};

export default TemplateTodo;
