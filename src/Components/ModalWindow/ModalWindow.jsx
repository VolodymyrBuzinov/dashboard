import React, { useCallback } from 'react';
import style from './ModalWindow.module.scss';
import ModalButton from '../ModalButton/ModalButton';
import { useDispatch, useSelector } from 'react-redux';
import tasksOperations from '../../Redux/Operations/onClickDeleteModalButton-operation'
// import * as tasksActions from '../../redux/Actions/onClickDeleteModalButton-action'
// import contactsSelectors from '../../redux/contacts/contacts-selectors'

const ModalWindow = props => {
    const dispatch = useDispatch();
    // const tasks = useSelector(tasksSelectors.getAllTasks)
    const handleRemoveTask = useCallback((id) => {
        dispatch(tasksOperations.removeTaskCard(id))
    },[dispatch])

    return (
        <div onClick={() => props.cancel(false)} className={`${style.backdrop} ${props.isOpened ? `${style.open}` : `${style.close}`}`}>
            <div className={`${style.modal}`}  >
                <span className={`${style.content}`} >Delete this Quest?</span>
                <div className={`${style.controls}`}>
                    <ModalButton
                        onClick={() => props.cancel(false)}
                        content="CANCEL"
                        condition={style.buttonCancel}
                    />
                    <ModalButton
                        onClick={() => props.cancel(false)} // onClick={() => handleRemoveTask(id)}
                        content="DELETE"
                        condition={style.buttonDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalWindow