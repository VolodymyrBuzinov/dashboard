import s from './DashboardListItem.module.scss';
import iconVector from '../../Icons/svg/Vector.svg'

function DashboardListItem({ title, time, category, difficulty, challenge }) {
  return (<>
      <div className={s.todoItemСomplexity}>
      <div className={s.todoItemСircle}></div>
        <div className={s.todoItemDifficulty}>{difficulty}</div>
        <img className={s.todoItemSvg} src={`${iconVector}`} alt=""/>
      </div>
      <p className={s.todoItemTitle}>{title}</p>
        <p className={s.todoItemTime}>{time}</p>
      <div className={s.todoItemGroup}>{category}
      </div>
    </>
  );
};    

export default DashboardListItem;