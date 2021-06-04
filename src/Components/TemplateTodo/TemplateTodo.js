import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import Category from '../Category/Category'
import CategoryBtn from '../Category/CategoryBtn'

const LIST_CATEGORY = ['stuff', 'family', 'health', 'learning', 'leisure', 'work']

const INITIAL_STATE = {category: LIST_CATEGORY[0]}

const TemplateTodo = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);


  const onclick = () => dispatch(onClickBtnCreate(true));
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const handleClickElement =(e) =>{
    const {type, name} = e.target.dataset    
    setState(prevState => ({
      ...prevState,
      [type]: name
  }));


  }

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
        <CategoryBtn type='level' title={state.category } onClick={toggleModal}>
        {showModal && (
          <Modal onClose={toggleModal} type="category">
            <Category items={LIST_CATEGORY} handleClick={handleClickElement} />
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
