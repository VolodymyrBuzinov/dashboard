import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './TeamModal.module.scss';
import img from '../../Images/bg-mobile.png';
import './index.scss';
const modalRoot = document.querySelector('#team-modal');
const body = document.querySelector('body');

const TeamModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    body.classList.add('lock');

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('lock');
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <div className={style.closeModal} onClick={handleOverlayClick} />
        <ul className={style.teamList}>
          <li className={style.teamListItem}>
            <img
              className={style.teamListItemImg}
              src="https://i.ibb.co/YdHKfgg/Denis-Svinkovskiy.jpg"
              alt="Denis-Svinkovskiy"
              border="0"
            />
            <h3 className={style.nameTitle}>Denis Svinkovskiy</h3>
            <p className={style.description}>
              Working with tasks logic in back-end
            </p>
            <a
              href="https://www.linkedin.com/in/denis-svinkovskiy-a4043a200/"
              target="blank"
              className={style.linkedinLink}
            >
              Denis's Linkedin
            </a>
          </li>
          <li className={style.teamListItem}>
            <img className={style.teamListItemImg} src={img} alt="" />
            <h3 className={style.nameTitle}>Vova Buzinov</h3>
            <p className={style.description}>
              Working with user's logic in back-end
            </p>
            <a
              href="https://www.linkedin.com/in/volodymyr-buzinov/"
              target="blank"
              className={style.linkedinLink}
            >
              Vova's Linkedin
            </a>
          </li>
          <li className={style.teamListItem}>
            <img className={style.teamListItemImg} src={img} alt="" />
            <h3>Denis Svinkovskiy</h3>
          </li>
          <li className={style.teamListItem}>
            <img className={style.teamListItemImg} src={img} alt="" />
            <h3>Vova Buzinov</h3>
          </li>
        </ul>
      </div>
    </div>,
    modalRoot,
  );
};
export default TeamModal;
