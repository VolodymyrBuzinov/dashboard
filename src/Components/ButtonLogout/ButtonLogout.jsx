import React from 'react';
import {useDispatch } from 'react-redux';
import iconLogout from '../../Icons/svg/logout.svg'
import s from './ButtonLogout.module.scss'
import {logOutAuth } from '../../Redux/Auth/authOperation';


const ButtonLogout = () => {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logOutAuth());  
    return (
        <button className={s.buttonLogout} onClick={() => onLogout()}>
            <img  src={`${iconLogout}`} alt="" />
        </button>
    )
}

export default ButtonLogout