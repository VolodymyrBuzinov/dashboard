import { useEffect } from 'react';
import style from './Modal.module.scss';

export default function Modal({ type, onClose, children }) {
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
    if (event.currentTarget !== event.target) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`${style.Modal__backdrop} ${style[type]}`}
        onClick={handleBackdropClick}
      ></div>
      <div className={`${style.Modal__content} ${style[type]}`}>{children}</div>
    </>
  );
}
