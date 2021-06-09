import style from './Level.module.scss';

export default function Level({ items, handleClick, cb }) {
  return (
    <>
      <ul className={style.Level__list}>
        {items.map((item, index) => (
          <div className={style.Level__group}>
            <div className={`${style.Level__circle} ${style[item]}`}></div>

            <li
              key={index}
              onClick={() => handleClick('difficulty', item, cb)}
              className={style.Level__list}
            >
              {item}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
