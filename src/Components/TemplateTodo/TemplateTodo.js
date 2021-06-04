import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './TemplateTodo.module.scss';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Level from '../Level';
import CategoryBtn from '../Category/CategoryBtn';

const LIST_CATEGORY = [
  'stuff',
  'family',
  'health',
  'learning',
  'leisure',
  'work',
];

const LIST_LEVEL = ['easy', 'normal', 'hard'];

const INITIAL_STATE = { category: LIST_CATEGORY[0], level: LIST_LEVEL[0] };

const TemplateTodo = () => {
  const dispatch = useDispatch();
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [showModalLevel, setShowModalLevel] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);

  const onclick = () => dispatch(onClickBtnCreate(true));

  const toggleModalCategory = useCallback(() => {
    setShowModalCategory(prevShowModalCategory => !prevShowModalCategory);
  }, []);
  const toggleModalLevel = useCallback(() => {
    setShowModalLevel(prevShowModalLevel => !prevShowModalLevel);
  }, []);

  const handleClickElementCategory = e => {
    const { type, name } = e.target.dataset;
    setState(prevState => ({
      ...prevState,
      [type]: name,
    }));
  };
  const handleClickElementLevel = e => {
    const { type, name } = e.target.dataset;
    setState(prevState => ({
      ...prevState,
      [type]: name,
    }));
  };

  return (
    <>
      <div className={style.TemplateTodo__group}>
        <CategoryBtn
          type="level"
          title={state.level}
          onClick={toggleModalLevel}
        >
          {showModalLevel && (
            <Modal onClose={toggleModalLevel} type="level">
              <Level items={LIST_LEVEL} handleClick={handleClickElementLevel} />
            </Modal>
          )}
        </CategoryBtn>
        <div style={{ height: '100px' }}></div>

        <CategoryBtn
          type="category"
          title={state.category}
          onClick={toggleModalCategory}
        >
          {showModalCategory && (
            <Modal onClose={toggleModalCategory} type="category">
              <Category
                items={LIST_CATEGORY}
                handleClick={handleClickElementCategory}
              />
            </Modal>
          )}
        </CategoryBtn>
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
