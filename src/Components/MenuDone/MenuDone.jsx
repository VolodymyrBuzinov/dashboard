import React from 'react';
import sprite from '../../Icons/symbol-defs.svg'
import style from './MenuDone.module.scss';


function MenuDone() {
        // const [isOpen, setIsOpen] = useState(false);
        return <div className={style.container}>
            <input type="checkbox" className={style.check}></input>
            <div className={style.doneList}>

 <div
        className={style.spoiler}
      >
    <span>DONE</span> <svg className={style.icon}><use href={`${sprite}#icon-polygon`}></use></svg> <span className={style.dottedLine}></span>
        </div>
        <div className={`${style.menu} ${style.isOpenMenu}`}>
            <h2 className={`${style.contentMenu} ${style.isOpen}`}>Test content</h2>
        </div>
            </div>
        </div>
}

export default MenuDone