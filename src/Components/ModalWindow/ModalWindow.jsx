import React from 'react';
import style from './ModalWindow.module.scss';
import ModalButton from '../ModalButton/ModalButton'

const ModalWindow = props => {
    return (
        <div className={`${style.backdrop} ${props.isOpened ? `${style.open}` : `${style.close}`}`}>
            <div className={`${style.modal}`}  >
                <span className={`${style.content}`} >Delete this Quest?</span>
                <div className={`${style.controls}`}>
                    <ModalButton content="CANCEL" condition={style.buttonCancel}/>
                    <ModalButton content="DELETE" condition={style.buttonDelete} />
                </div>
            </div>
        </div>
    )
}

export default ModalWindow