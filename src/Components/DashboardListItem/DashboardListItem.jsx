import { useState } from 'react';
import s from './DashboardListItem.module.scss';
import Button from '../Button/Button'
function DashboardListItem({ title, time, category, difficulty, children,  }) {
  const [challenge, setChallenge] = useState(false);
  const toggleChallenge = () => setChallenge(prev => !prev);

  return (
    <>
      {/*<TemplateTodo
          category={category}
          difficulty={difficulty}
          title={title}
          time={time}
          {children}
    />*/}
      <div className={challenge ? s.todoItem__challenge : s.todoItem} >
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
      <p className={challenge ? s.todoItemChallenge__challenge : s.todoItemChallenge}>CHALLENGE</p>
      <p className={challenge ? s.todoItemTitle__challenge : s.todoItemTitle}>{title}</p>
        <p className={s.todoItemTime}>{time}</p>
      <div className={s.todoItemGroup}>{category}
      </div>
    </div>
    </>
  );
}

export default DashboardListItem;
