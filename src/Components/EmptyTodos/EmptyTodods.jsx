import styles from './EmptyTodos.module.scss';
import sprite from '../../Icons/symbol-defs.svg';
export default function EmptyTodos() {
  return (
    <ul className={styles.emptyList}>
      <li className={styles.emptyItem}>
        <div className={styles.emptyControls}>
          <p className={styles.emptyControlsText}>Easy</p>
          <svg className={styles.emptyIcon}>
            <use href={`${sprite}#icon-Vector`}></use>
          </svg>
        </div>
        <p className={styles.emptyParagraph}>
          Hi ! You haven`t quests yet, add it by clicking add button.
        </p>
        <p className={styles.emptyCategory}>FAMILY</p>
      </li>
    </ul>
  );
}
