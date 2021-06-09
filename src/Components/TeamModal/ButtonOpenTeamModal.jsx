import { useState } from 'react';
import svgSprite from '../../Icons/symbol-defs.svg';
import s from './ButtonOpenTeamModal.module.scss';
import TeamModal from './TeamModal';

const ButtonOpenTeamModal = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const handleToggleModal = () => {
    setShowTeamModal(prev => !prev);
  };
  return (
    <>
      <div className={s.container}>
        <svg className={s.teamSvg} onClick={handleToggleModal}>
          <use href={`${svgSprite}#icon-teamwork`}></use>
        </svg>
      </div>

      <TeamModal isOpen={showTeamModal} onClose={handleToggleModal} />
    </>
  );
};

export default ButtonOpenTeamModal;
