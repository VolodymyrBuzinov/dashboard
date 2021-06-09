import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import exp from '../../Redux/Operations/templateOperations';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import { editTodo } from '../../Redux/Actions/editTodo-action';

export default function GroupButtonSaveClearDone({
  isEditTodo,
  isVisible,
  acceptChanges,
  toggleModalDelete,
  state,
}) {
  const dispatch = useDispatch();

  // const handleClickElementClear = () => {
  //   console.log('run handleClickElementClear');
  // };
  const handleClickElementCreate = () => {
    const categoryToUpperCase = state.category.toUpperCase();
    const difficultyToUpperCase = state.difficulty.toUpperCase();
    console.log({
      ...state,
      category: categoryToUpperCase,
      difficulty: difficultyToUpperCase,
    });
    dispatch(
      exp.createTemplate({
        ...state,
        category: categoryToUpperCase,
        difficulty: difficultyToUpperCase,
      }),
    );
    // dispatch(todoOperations.fetchTodos());
    dispatch(onClickBtnCreate(false));
    dispatch(editTodo(false));
  };
  const handleClickElementSave = () => {
    console.log('run handleClickElementSave');
  };

  return (
    <>
      {isVisible && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            className={style.GroupButtonSaveClearDone__ButtonSvg}
            type="button"
            content="icon-clear"
            onClick={acceptChanges}
            isActive={false}
          />
          <Button
            type="button"
            content="create"
            onClick={handleClickElementCreate}
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
          <Button type="button" content="icon-done" onClick={acceptChanges} />
        </div>
      )}
    </>
  );
}
