import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import templateOperations from '../../Redux/Operations/templateOperations';

export default function GroupButtonSaveClearDone({
  isEditTodo,
  isVisible,
  acceptChanges,
  toggleModalDelete,
}) {
  const dispatch = useDispatch();

  const newTodoTest = {
    category: 'HEALTH',
    difficulty: 'NORMAL',
    title: 'Test 2',
    time: '2021-06-08T20:30',
    challenge: false,
    done: false,
  };

  const createTemplate = () => {
    dispatch(templateOperations.createTemplate(newTodoTest));
    acceptChanges();
  };

  const updateStatusDoneTemplate = id => {
    console.log(
      '🚀 ~ file: GroupButtonSaveClearDone.jsx ~ line 27 ~ updateStatusDoneTemplate ~ e',
      id,
    );
    // dispatch(templateOperations.updateStatusDoneTemplate(id));
  };

  const handleClickElementSave = id => {
    console.log('🚀 ~ file: GroupButtonSaveClearDone.jsx ~ line 39 ~ id', id);
    // dispatch(templateOperations.updateTemplate(id.target.id));
  };
  const cancelCreateTodo = () => {
    // прописать изменения isVisible=false
    console.log('прописать изменения isVisible=false');
  };

  return (
    <>
      {isVisible && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            className={style.GroupButtonSaveClearDone__ButtonSvg}
            type="button"
            content="icon-clear"
            onClick={cancelCreateTodo}
            isActive={false}
          />
          <Button
            type="button"
            content="create"
            onClick={createTemplate}
            isActive={true}
          />
        </div>
      )}

      {isEditTodo && !isVisible && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            type="button"
            content="icon-save"
            onClick={handleClickElementSave}
          />
          <Button
            type="button"
            content="icon-clear"
            onClick={toggleModalDelete}
          />
          <Button
            type="button"
            content="icon-done"
            onClick={updateStatusDoneTemplate}
          />
        </div>
      )}
    </>
  );
}
