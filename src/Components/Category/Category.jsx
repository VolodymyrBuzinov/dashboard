import style from './Category.module.scss';

const Category = ({ items, isChallenge, handleClick, cb }) => {
  return (
    <>
      <ul className={style.Category__list}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick('category', item, cb)}
            className={`${style.Category__item} ${
              isChallenge && style.challenge
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
