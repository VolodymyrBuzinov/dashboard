import style from './CategoryBtn.module.scss';
import sprite from '../../Icons/symbol-defs.svg'

const CategoryBtn = ({type, title, onClick, children})=> {
    return(
        <div onClick={onClick} className={style.Btn}>
            {type==='level' && (<div className={`${style.Btn__circle} ${style[title]}` }></div>)}
            <span>{title}</span>
            <svg width="8" height="4" className={style.Btn__icon}>          
          <use href={`${sprite}#icon-polygon`} ></use>
        </svg>
        {children}
        </div>
    )
}
export default CategoryBtn
