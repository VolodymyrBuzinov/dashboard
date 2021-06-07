import React from 'react';
import style from './ModalWindow.module.scss';
import { useDispatch } from 'react-redux';
import todosOperations from '../../Redux/Todos/todosOperations';
import Button from '../Button/Button';

const ModalWindow = ({ id, isOpened, question }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(todosOperations.deleteTodo(id));
    isOpened();
  };

  return (
    <>
      <span className={`${style.content}`}>{question}</span>
      <div className={`${style.controls}`}>
        <Button
          onClick={isOpened}
          content="cancel"
          className={style.buttonCancel}
        />
        <Button
          onClick={handleRemoveTask}
          content="delete"
          className={style.buttonDelete}
        />
      </div>
    </>
  );
};

export default ModalWindow;
