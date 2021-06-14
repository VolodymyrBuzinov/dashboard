import style from './BackdropForList.module.scss';

const BackdropForList = ({ onClose }) => {
  return <div className={style.backdrop} onClick={onClose} />;
};
export default BackdropForList;
