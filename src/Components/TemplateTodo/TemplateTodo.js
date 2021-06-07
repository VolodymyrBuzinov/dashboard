import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level';
import ButtonOpenModal from '../ButtonOpenModal/ButtonOpenModal.jsx';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers';
import { green } from '@material-ui/core/colors';
import isVisibleTemplate from '../../Redux/Selectors/isVisibleSelector';
import isEdit from '../../Redux/Selectors/editTodoSelector';
import InputTodo from '../InputTodo/InputTodo';
import ModalWindow from '../ModalWindow/ModalWindow'

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

const TemplateTodo = ({ category, difficulty, id, time, title }) => {
  const isVisible = useSelector(isVisibleTemplate);
  const edit = useSelector(isEdit);
  const dispatch = useDispatch();
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);
  const [challenge, setChallenge] = useState(false);

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
    dispatch(editTodo(true));
  };

  const acceptChanges = () => {
    dispatch(onClickBtnCreate(false));
    dispatch(editTodo(false));
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
  }

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
              title={!isVisible ? state.difficulty : difficulty}
              onClick={edit && !challenge && toggleModalLevel}
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
          <InputTodo getInputText={updateState} />
          <DateAndTimePickers getDate={updateState} />          
        </div>

        <div className={style.TemplateTodo__WrapperBottom}>
          <div
            className={`${style.TemplateTodo__ButtonBgc} ${style[category]}`}
          >
            <ButtonOpenModal
              type="category"
              title={!isVisible ? state.category : category}
              onClick={edit && !challenge && toggleModalCategory}
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
            <ModalWindow isOpened={toggleModalDelete} question='Delete this Quest?'/>
        </Modal>

      )}
    </div>
  );
};

export default TemplateTodo;
