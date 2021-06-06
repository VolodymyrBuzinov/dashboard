import React, { useCallback, useEffect } from 'react';
import style from './ModalWindow.module.scss';
import ModalButton from '../ModalButton/ModalButton';
import { useDispatch } from 'react-redux';
import todosOperations from '../../Redux/Todos/todosOperations';

const ModalWindow = ({ id, isOpened, cancel }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpened) {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          cancel(false);
        }
      };
      const handleOutCardClick = e => {
        const modalCard = document.querySelector('#modalCard');
        if (e.target !== modalCard) {
          cancel(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleOutCardClick);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('click', handleOutCardClick);
      };
    }
  }, [cancel, isOpened]);

  const handleRemoveTask = useCallback(
    id => {
      dispatch(todosOperations.deleteTodo(id));
    },
    [dispatch],
  );

  return (
    <div
      id="modalCard"
      onClick={() => cancel(false)}
      className={`${style.backdrop} ${
        isOpened ? `${style.open}` : `${style.close}`
      }`}
    >
      <div className={`${style.modal}`}>
        <span className={`${style.content}`}>Delete this Quest?</span>
        <div className={`${style.controls}`}>
          <ModalButton
            onClick={() => cancel(false)}
            content="CANCEL"
            condition={style.buttonCancel}
          />
          <ModalButton
            onClick={() => handleRemoveTask(id)}
            content="DELETE"
            condition={style.buttonDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
