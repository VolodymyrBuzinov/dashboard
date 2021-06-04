import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
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
  console.log('🚀 ~ TemplateTodo ~ State', state);

  const onclick = () => dispatch(onClickBtnCreate(true));

  const toggleModalCategory = useCallback(() => {
    setShowModalCategory(prevShowModalCategory => !prevShowModalCategory);
  }, []);
  const toggleModalLevel = useCallback(() => {
    setShowModalLevel(prevShowModalLevel => !prevShowModalLevel);
  }, []);

  const handleClickElement = e => {
    console.log(
      '🚀 ~ file: TemplateTodo.js ~ line 46 ~ TemplateTodo ~ e.target',
      e.target,
    );
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
      <div
        style={{
          position: 'relative',
          width: '205px',
          height: '199px',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: 'solid 1px',
        }}
      >
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
                handleClick={handleClickElement}
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
