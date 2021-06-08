import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button';

export default function GroupButtonSaveClearDone({ isEditTodo, isVisible, acceptChanges, toggleModalDelete }) {


  const handleClickElementClear = () => {
    console.log('run handleClickElementClear');
  };
  const handleClickElementCreate = () => {
    console.log('run handleClickElementCreate');
  };
  const handleClickElementSave = () => {
    console.log('run handleClickElementSave');
    
  };

  return (
    <>
      {isVisible && <li className={style.GroupButtonSaveClearDone__ButtonGroup}>
        <Button
          className={style.GroupButtonSaveClearDone__ButtonSvg}
            type="button"
            content="icon-clear"
            onClick={handleClickElementClear}
            isActive={false}
          />
          <Button
            type="button"
            content="create"
            onClick={handleClickElementCreate}
            isActive={true}
          />
        </li>}

      {isEditTodo &&  <li className={style.GroupButtonSaveClearDone__ButtonGroup}>
          <Button  type="button" content="icon-save" onClick={handleClickElementSave} />
          <Button
            type="button"
            content="icon-clear"
            onClick={toggleModalDelete}
          />
          <Button type="button" content="icon-done" onClick={acceptChanges} />
        </li>  
      }
    </>
  );
}
