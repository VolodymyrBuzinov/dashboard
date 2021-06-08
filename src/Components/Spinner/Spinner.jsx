import styles from './Spinner.module.scss';
import sprite from '../../Icons/symbol-defs.svg';
export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerInner}>
        <svg className={styles.spinnerIcon}>
          <use href={`${sprite}#icon-paulq`}></use>
        </svg>
      </div>
    </div>
  );
}
