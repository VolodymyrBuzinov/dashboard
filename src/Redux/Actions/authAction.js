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

export const getVerifyUserSuccess = createAction('getVerifyUserSuccess');
export const getVerifyUserError = createAction('getVerifyUserError');

export const reVerificationtUserStart = createAction(
  'reVerificationtUserStart',
);
export const reVerificationtUserSuccess = createAction(
  'reVerificationtUserSuccess',
);
export const reVerificationtUserError = createAction(
  'reVerificationtUserError',
);

export const getRefreshTokenStart = createAction('getRefreshTokenStart');
export const getRefreshTokenSuccess = createAction('getRefreshTokenSuccess');
export const getRefreshTokenError = createAction('getRefreshTokenError');

export const refreshTokenAction = createAction('refreshTokenAction');
