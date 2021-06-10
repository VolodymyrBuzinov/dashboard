import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import exp from '../../Redux/Operations/todosOperations';
import { onClickBtnCreate } from '../../Redux/Actions/onClickBtnCreate-action';
import { editTodo } from '../../Redux/Actions/editTodo-action';
import getShowCardDone from '../DashboardList/CardDone/getShowCardDone';

export default function GroupButtonSaveClearDone({
  isEdit,
  isCreate,
  toggleModalDelete,
  category,
  difficulty,
  title,
  time,
  id,
  cancelСhanges,
}) {
  const state = { category, difficulty, title, time };

  const dispatch = useDispatch();

  const handleClickElementCreate = () => {
    const categoryToUpperCase = state.category.toUpperCase();
    const difficultyToUpperCase = state.difficulty.toUpperCase();

    dispatch(
      exp.addTodo({
        ...state,
        category: categoryToUpperCase,
        difficulty: difficultyToUpperCase,
      }),
    );
    dispatch(onClickBtnCreate(false));
    dispatch(editTodo(false));
  };

  const handleClickElementSave = () => {
    console.log('run handleClickElementSave');
    const categoryToUpperCase = state.category.toUpperCase();
    const difficultyToUpperCase = state.difficulty.toUpperCase();
    console.log({
      id,
      ...state,
      category: categoryToUpperCase,
      difficulty: difficultyToUpperCase,
    });

    dispatch(
      exp.updateTodo({
        ...state,
        id,
        category: categoryToUpperCase,
        difficulty: difficultyToUpperCase,
      }),
      );
    };
    console.log("🚀 ~ file: GroupButtonSaveClearDone.jsx ~ line 57 ~ handleClickElementSave ~ id-dis", id)

  const handleClickElementDone = () => {
    console.log('run handleClickElementDone');
    console.log({
      id,
      done: true,
    });

    dispatch(
      exp.updateTodoStatusDone({
        id,
        done: 'true',
      }),
    );
  };

  return (
    <>
      {isCreate && (
        <div className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button
            className={style.GroupButtonSaveClearDone__ButtonSvg}
            type="button"
            content="icon-clear"
            onClick={cancelСhanges}
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
      {/* isEdit */}
      {isEdit && (
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
            onClick={(()=>getShowCardDone(id))}
          />
        </div>
      )}
    </>
  );
}
