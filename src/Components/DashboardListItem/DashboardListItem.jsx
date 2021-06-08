import React, {useState} from 'react';
import s from './DashboardListItem.module.scss';
import Button from '../Button/Button';
//import TemplateTodo from '../TemplateTodo';

function DashboardListItem({ title, time, category, difficulty, children }) {
  const [challenge, setChallenge] = useState(false);
  const toggleChallenge = () => setChallenge(prev => !prev);

  return (<>
    {/*<TemplateTodo
          category={category}
          difficulty={difficulty}
          title={title}
          time={time}
    />*/}
      <div className={s.todoItemСomplexity}>
      <div className={s.todoItemСircle}></div>
        <div className={s.todoItemDifficulty}>{difficulty}</div>
        {challenge ? (
              <Button
                onClick={toggleChallenge}
                content="icon-trophy"
                type="button"
            
              />
            ) : (
              <Button
                onClick={toggleChallenge}
                content="icon-Vector"
                type="button"
             
              />
            )}
      </div>
      <p className={s.todoItemTitle}>{title}</p>
        <p className={s.todoItemTime}>{time}</p>
      <div className={s.todoItemGroup}>{category}
      </div>
    </>
  );
};    

export default DashboardListItem;