import { useState } from 'react';
import sprite from '../../Icons/symbol-defs.svg'
import style from './MenuDone.module.scss';


function MenuDone() {
        const [isOpen, setIsOpen] = useState(false);
    return <div className={style.container}>
 <button
        onClick={()=>setIsOpen(!isOpen)}
        type="button"
        className={style.button}
      >
    <p>DONE</p> <svg className={style.icon}><use href={`${sprite}#icon-polygon`}></use></svg> <span className={style.dottedLine}></span>
        </button>
        <div className={`${style.menu} ${isOpen&&style.isOpenMenu}`} aria-expanded={isOpen}>
            <h2 className={`${style.contentMenu} ${isOpen && style.isOpen}`}>Test content</h2>
        </div>
    </div>
}

export default MenuDone