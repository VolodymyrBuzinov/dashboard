import { createAction } from '@reduxjs/toolkit';

export const registerStart = createAction('registerStart');
export const registerSuccess = createAction('registerSuccess');
export const registerError = createAction('registerError');

export const loginStart = createAction('loginStart');
export const loginSuccess = createAction('loginSuccess');
export const loginError = createAction('loginError');

export const logoutStart = createAction('logoutStart');
export const logoutSuccess = createAction('logoutSuccess');
export const logoutError = createAction('logoutError');

export const getCurrentUserStart = createAction('getCurrentUserStart');
export const getCurrentUserSuccess = createAction('getCurrentUserSuccess');
export const getCurrentUserError = createAction('getCurrentUserError');
