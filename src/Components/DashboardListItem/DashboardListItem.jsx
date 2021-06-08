import React, {useState} from 'react';
import s from './DashboardListItem.module.scss';
//import iconVector from '../../Icons/svg/Vector.svg';
import Button from '../Button/Button';

function DashboardListItem({ title, time, category, difficulty, challenge }) {
  const [setChallenge] = useState(false);
  const toggleChallenge = () => setChallenge(prev => !prev);

  return (<>
      <div className={s.todoItemСomplexity}>
      <div className={s.todoItemСircle}></div>
        <div className={s.todoItemDifficulty}>{difficulty}</div>
        {/*<img className={s.todoItemSvg} src={`${iconVector}`} alt="" />*/}
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