import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers';
import { green } from '@material-ui/core/colors';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';

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
  const isVisible = useSelector(isVisibleTemplate);
  const dispatch = useDispatch();
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);
  const [challenge, setChallenge] = useState(false);
  const [edit, setEdit] = useState(false);

  const onclick = () => dispatch(onClickBtnCreate(true));

  const toggleModalCategory = e => {
    setShowModalCategory(prev => !prev);
  };

  const toggleModalLevel = () => {
    setShowModalLevel(prev => !prev);
  };

  const toggleModalDelete = () => {
    setShowModalDelete(prev => !prev);
  };

  const toggleChallenge = () => setChallenge(prev => !prev);

  const editCard = () => {
    setEdit(prev => !prev);
  };

  const acceptChanges = () => {
    dispatch(onClickBtnCreate(false));
    setEdit(prev => !prev);
  };

  const handleClickElement = e => {
    const { type, name } = e.target.dataset;
    setState(prevState => ({
      ...prevState,
      [type]: name,
    }));
  };

  return (
    <div
      className={style.TemplateTodo}
      onClick={!isVisible && !edit && editCard}
    >
      <div
        className={
          challenge
            ? `${style.TemplateTodo__challenge} ${style.TemplateTodo__group}`
            : style.TemplateTodo__group
        }
      >
        <div className={style.TemplateTodo__WrapperTop}>
          <div className="button">
            <ButtonOpenModal
              type="level"
              title={state.level}
              onClick={edit && toggleModalLevel}
              isEdit={edit && !challenge}
            >
              {showModalLevel && (
                <Modal onClose={toggleModalLevel} type="level">
                  <Level items={LIST_LEVEL} handleClick={handleClickElement} />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>

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
          </div>
        </div>

        <div className={style.TemplateTodo__WrapperMidle}>
          <DateAndTimePickers />
        </div>

        <div className={style.TemplateTodo__WrapperBottom}>
          <div
            className={`${style.TemplateTodo__ButtonBgc} ${style[category]}`}
          >
            <ButtonOpenModal
              type="category"
              title={state.category}
              onClick={toggleModalCategory}
              isEdit={edit && !challenge}
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
          >
            <Button type="button" content="icon-done" onClick={acceptChanges} />
          </div>
        </div>
      </div>
      {showModalDelete && (
        <Modal onClose={toggleModalDelete} type="delete">
          <div
            style={{ width: '100px', height: '100px', background: green }}
          ></div>
        </Modal>
      )}

      <Button
        content="icon-plus"
        type="button"
        isFixed="true"
        onClick={!edit && onclick}
      />
    </div>
  );
};

export default TemplateTodo;
