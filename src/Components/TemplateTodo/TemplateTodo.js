import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import Button from '../Button/Button';
import Category from '../Category/Category'

const LIST_CATEGORY = ['stuff', 'family', 'health', 'learning', 'leisure', 'work']

const TemplateTodo = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onclick = () => dispatch(onClickBtnCreate(true));
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <div
        onClick={toggleModal}
        style={{
          position: 'relative',
          width: '205px',
          height: '199px',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: 'solid 1px',
        }}
      >
        {showModal && (
          <Modal onClose={toggleModal} type="category">
            <Category items={LIST_CATEGORY} />
          </Modal>
        )}
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
