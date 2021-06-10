import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import style from './TeamModal.module.scss';
import './index.scss';
const modalRoot = document.querySelector('#team-modal');
const body = document.querySelector('body');

const TeamModal = ({ onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
          console.log('qwe');
        }
      };

      body.classList.add('lock');
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        body.classList.remove('lock');
      };
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames={style} unmountOnExit>
      <div className={style.overlay} onClick={handleOverlayClick}>
        <div className={style.modal}>
          <div className={style.closeModal} onClick={handleOverlayClick} />
          <ul className={style.teamList}>
            <li className={style.teamListItem}>
              <img
                src="https://i.ibb.co/mh7ZgQw/Vova-Buzinov.jpg"
                className={style.teamListItemImg}
                alt="Vova-Buzinov"
                border="0"
              />
              <h3 className={style.nameTitle}>Vova Buzinov</h3>
              <h4 className={style.nameSubTitle}>Team-lead</h4>
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
              <img
                className={style.teamListItemImg}
                src="https://i.ibb.co/55KpX4L/Pankrusheva-Anastasiia.jpg"
                alt="Pankrusheva-Anastasiia"
                border="0"
              />
              <h3 className={style.nameTitle}>Anastasiia Pankrusheva</h3>
              <p className={style.description}>
                The logic of the arrangement of cards for today and tomorrow
                Rendering data and styles from the back on the card in the
                "Challenge" card
              </p>
              <a
                href="https://www.linkedin.com/mwlite/in/anastasiia-pankrusheva"
                target="blank"
                className={style.linkedinLink}
              >
                Anastasiia's Linkedin
              </a>
            </li>
            <li className={style.teamListItem}>
              <img
                className={style.teamListItemImg}
                src="https://i.ibb.co/C70Pn8h/Mykhailo-Otmakhov.jpg"
                alt="Mykhailo-Otmakhov"
                border="0"
              />
              <h3 className={style.nameTitle}>Mykhailo Otmakhov</h3>
              <p className={style.description}>
                Working with tasks logic in back-end
              </p>
              <a
                href="https://www.linkedin.com/in/mykhailo-otmakhov-7929691bb/"
                target="blank"
                className={style.linkedinLink}
              >
                Mykhailo's Linkedin
              </a>
            </li>
            <li className={style.teamListItem}>
              <img
                className={style.teamListItemImg}
                src="https://i.ibb.co/qyW4Zvg/Yarmolenko-Tetiana.jpg"
                alt="Yarmolenko-Tetiana"
                border="0"
              />
              <h3 className={style.nameTitle}>Tetiana Yarmolenko</h3>
              <p className={style.description}>
                In this project I implemented the header section and the
                functionality of its components.
              </p>
              <a
                href="https://www.linkedin.com/in/tetiana-yarmolenko-417594200"
                target="blank"
                className={style.linkedinLink}
              >
                Tetiana's Linkedin
              </a>
            </li>
            <li className={style.teamListItem}>
              <img
                className={style.teamListItemImg}
                src="https://i.ibb.co/gtzqLFn/Andrii-Zatochniy.jpg"
                alt="Andrii-Zatochniy"
                border="0"
              />
              <h3 className={style.nameTitle}>Andrii Zatochniy</h3>
              <p className={style.description}>
                (Frontend - Routing, Logics (Signup, Login, Logout), Refresh
                Token, Sending a follow-up letter to verification email)
              </p>
              <a
                href="https://www.linkedin.com/in/Andrii-Zatochniy/"
                target="blank"
                className={style.linkedinLink}
              >
                Andrii's Linkedin
              </a>
            </li>
            <li className={style.teamListItem}>
              <img
                className={style.teamListItemImg}
                src="https://i.ibb.co/1MMmFrX/Yurii-Streltsov.jpg"
                alt="Yurii-Streltsov"
                border="0"
              />
              <p className={style.description}>
                Working with tasks logic in back-end
              </p>
              <a
                href="https://www.linkedin.com/in/yurii-streltsov/"
                target="blank"
                className={style.linkedinLink}
              >
                Yurii's Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>,
    modalRoot,
  );
};
export default TeamModal;
