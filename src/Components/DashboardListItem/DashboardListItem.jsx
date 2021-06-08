import React, {useState} from 'react';
import s from './DashboardListItem.module.scss';
//import iconVector from '../../Icons/svg/Vector.svg';
import Button from '../Button/Button';

function DashboardListItem({ title, id, time, category, difficulty, onClick }) {
  const [challenge, setChallenge] = useState(false);
  const toggleChallenge = () => setChallenge(prev => !prev);

  return (<>
    <li key={id} onClick={onClick} className={ challenge ? s.todoItemChallenge : s.todoItem}>
      <div className={s.todoItemСomplexity}>{difficulty}
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
    </li>
    </>
  );
};    

export default DashboardListItem;