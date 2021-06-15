import DashboardListItem from '../DashboardListItem/DashboardListItem';
import sprite from '../../Icons/symbol-defs.svg';
import './MenuDone.scss';
import style from './MenuDone.module.scss';
import styleDashboardList from '../DashboardList/DashboardList.module.scss';

function MenuDone({ todos }) {
  const check = document.getElementById('iconDone');
  const menu = document.getElementById('menuDone');
  const clickButton = () => {
    const doneNone = check.classList.contains('iconClick');
    if (!doneNone) {
      menu.classList.add('menuClickBlock');
      setTimeout(() => {
        check.classList.add('iconClick');
        menu.classList.add('menuClick');
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      check.classList.remove('iconClick');
      menu.classList.remove('menuClick');

      setTimeout(() => {
        menu.classList.remove('menuClickBlock');
      }, 1000);
    }
  };

  return (
    <div className="container">
      <button onClick={clickButton} id="check" className={style.check}></button>
      <div className={style.doneList}>
        <div className={style.spoiler}>
          <span className={styleDashboardList.todoListTitle}>DONE</span>{' '}
          <svg id="iconDone" className="icon">
            <use href={`${sprite}#icon-polygon`}></use>
          </svg>{' '}
          <span className={style.dottedLine}></span>
        </div>
        <div className={style.overflow}>
          <div id="menuDone" className="menu">
            <ul className={styleDashboardList.todoList}>
              {todos.map(
                ({
                  title,
                  _id,
                  time,
                  category,
                  difficulty,
                  challenge,
                  done,
                }) => (
                  <li key={_id}>
                    <DashboardListItem
                      category={category}
                      difficulty={difficulty}
                      title={title}
                      done={done}
                      id={_id}
                      time={time}
                      challengeStyle={challenge}
                    ></DashboardListItem>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDone;
