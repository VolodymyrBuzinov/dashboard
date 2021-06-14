import { useEffect } from 'react';
import style from './Modal.module.scss';

export default function Modal({ type, isChallenge, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) onClose();
  };

  return (
    <>
      <div
        className={`${style.Modal__backdrop} ${style[type]}`}
        onClick={handleBackdropClick}
      ></div>
      <div
        className={`${style.Modal__content} ${style[type]} ${
          isChallenge && style.challenge
        }`}
      >
        {children}
      </div>
    </>
  );
}
