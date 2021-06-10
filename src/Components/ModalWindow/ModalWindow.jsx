import style from './ModalWindow.module.scss';
import { useDispatch } from 'react-redux';
import todosOperations from '../../Redux/Operations/todosOperations';
import Button from '../Button/Button';
import { editTodo } from '../../Redux/Actions/editTodo-action';

const ModalWindow = ({ id, isOpened, question, acceptChanges }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(todosOperations.deleteTodo(id));
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
