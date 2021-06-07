import styles from './Spinner.module.scss';
import sprite from '../../Icons/symbol-defs.svg';
export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerInner}>
        <div className={styles.innerCircle}></div>
        <svg className={styles.spinnerIcon}>
          <use href={`${sprite}#icon-question`}></use>
        </svg>
      </div>
    </div>
  );
}
