import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level/Level';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal.jsx';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers.jsx';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import isEdit from '../../Redux/Selectors/editTodoSelector';
import InputTodo from '../InputTodo/InputTodo.jsx';
import ModalWindow from '../ModalWindow/ModalWindow';
import GroupButtonSaveClearDone from '../GroupButtonSaveClearDone/GroupButtonSaveClearDone';

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
};

const TemplateTodo = ({ category, difficulty, time, title, id }) => {
  const categoryToLowerCase = category && category.toLowerCase();
  const difficultyToLowerCase = difficulty && difficulty.toLowerCase();
  const isVisible = useSelector(isVisibleTemplate);
  const isEditTodo = useSelector(isEdit);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);
  const [challenge, setChallenge] = useState(false);

  const toggleModalCategory = e => {
    if (edit && !challenge) {
      setShowModalCategory(prev => !prev);
    }
  };

  const toggleModalLevel = () => {
    if (edit && !challenge) setShowModalLevel(prev => !prev);
  };

  const toggleModalDelete = () => {
    setShowModalDelete(prev => !prev);
  };

  const toggleChallenge = () => {
    if (!isVisible && !edit) setChallenge(prev => !prev);
  };

  const editCard = () => {
    if (!isEditTodo && !isVisible) {
      dispatch(editTodo(true));
      setEdit(true);
    }
  };

  useEffect(() => {
    if (!category) {
      dispatch(editTodo(true));
      setEdit(true);
    }
  }, []);  

  const acceptChanges = () => {
    dispatch(onClickBtnCreate(false));
    dispatch(editTodo(false));
    setEdit(false);
    setState(INITIAL_STATE);
  };

  const handleClickElement = e => {
    const { type, name } = e.target.dataset;
    setState(prevState => ({
      ...prevState,
      [type]: name,
    }));
  };

  const updateState = (name, value) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <li className={style.TemplateTodo} onClick={editCard}>
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
              type="difficulty"
              title={
                !difficultyToLowerCase || edit
                  ? state.difficulty
                  : difficultyToLowerCase
              }
              onClick={toggleModalLevel}
              isEdit={edit}
            >
              {showModalLevel && (
                <Modal onClose={toggleModalLevel} type="difficulty">
                  <Level items={LIST_LEVEL} handleClick={handleClickElement} />
                </Modal>
              )}
            </ButtonOpenModal>
          </div>

          <div className="star">
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
                isActive={!edit}
              />
            )}
          </div>
        </div>

        <div className={style.TemplateTodo__WrapperMidle}>
          {!edit ? (
            <>
              <p className={style.todoItemTitle}>{title}</p>
              <p className={style.todoItemTime}>{time}</p>
            </>
          ) : (
            <>
              <InputTodo getInputText={updateState} />
              <DateAndTimePickers getDate={updateState} />
            </>
          )}
        </div>

        <div className={style.TemplateTodo__WrapperBottom}>
          <div
            className={`${style.TemplateTodo__ButtonBgc} ${
              edit ? style[state.category] : style[categoryToLowerCase]
            }`}
          >
            <ButtonOpenModal
              type="category"
              title={
                !categoryToLowerCase || edit
                  ? state.category
                  : categoryToLowerCase
              }
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
          {edit && (
            <>
              <div className={style.TemplateTodo__ButtonGroup}>
                <GroupButtonSaveClearDone
                  state={state}
                  isEditTodo={edit}
                  isVisible={isVisible}
                  toggleModalDelete={toggleModalDelete}
                  acceptChanges={acceptChanges}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {showModalDelete && (
        <Modal onClose={toggleModalDelete} type="delete">
          <ModalWindow
          id={id}
            isOpened={toggleModalDelete}
            question="Delete this Quest?"
            acceptChanges={acceptChanges}
          />
        </Modal>
      )}
    </li>
  );
};

export default TemplateTodo;
