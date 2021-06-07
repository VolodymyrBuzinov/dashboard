import React from 'react';
import style from './ModalButton.module.scss'

/*  content-добавляем внутренее содержимое(текст)
    condition-добавляем стили для кнопки
    onClick-принимает функцию-обработчик события по нажатию кнопки
*/

const ModalButton = ({content, condition, onClick }) => {
    return <button onClick={onClick} type="button" className={`${style.Button} ${condition}`}>{content}</button>
}

export default ModalButton