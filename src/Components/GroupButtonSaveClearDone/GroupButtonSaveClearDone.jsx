import style from './GroupButtonSaveClearDone.module.scss';
import Button from '../Button/Button'


export default function DateAndTimePickers({ edit, acceptChanges }) {

    console.log(edit);

    
     const clickButton = () => {
        console.log('clik BUTTON');
    };
    
  return (
      <>
          {edit ?
              <div className={style.DateAndTimePickers__CreateTodo}>
                  <Button type="button"
                      content="icon-clear"
                      onClick={clickButton}
                      isActive={false}
                    />
                  <Button
                      type="button"
                      content="CREATE"
                      onClick={clickButton}
                      isActive={true} />
          </div>
              :
              <div className={style.DateAndTimePickers__EditTodo}>
                  <Button type="button" content="icon-save" onClick={clickButton}/>
                  <Button type="button" content="icon-clear" onClick={()=> {console.log("click Button CLEAR");}}/>
                  <Button type="button" content="icon-done" onClick={acceptChanges}/>
          </div>}
      </>
  );
}
