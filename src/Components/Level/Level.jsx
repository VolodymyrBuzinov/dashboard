import style from './Level.module.scss';

export default function Level({ items, isChallenge, handleClick, cb }) {
  return (
    <>
      <ul className={style.Level__list}>
        {items.map((item, index) => (
          <li key={index} className={style.Level__group}>
            <div className={`${style.Level__circle} ${style[item]}`}></div>

            <div
              key={index}
              onClick={() => handleClick('difficulty', item, cb)}
              className={`${style.Level__list} ${
                isChallenge && style.challenge
              }`}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
