import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerStart,
  loginStart,
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
  getVerifyUserSuccess,
  getVerifyUserError,
  reVerificationtUserSuccess,
  reVerificationtUserError,
  getRefreshTokenSuccess,
  getRefreshTokenError,
  refreshTokenAction,
} from '../Actions/authAction';

const initial = { name: null, email: null };

const user = createReducer(initial, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initial,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [getRefreshTokenSuccess]: (_, { payload }) => payload.user,
  [refreshTokenAction]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [getRefreshTokenSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getVerifyUserError]: (_, { payload }) => payload,
  [reVerificationtUserError]: (_, { payload }) => payload,
  [getRefreshTokenError]: (_, { payload }) => payload,
});

// получаю флаг для аутентификации
const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => false,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

// получаю флаг для спинера во время загрузки страницы
const waiting = createReducer(false, {
  [loginStart]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [registerStart]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
});

// получаю флаг true или false для перехода с verifyPage на loginPage
const verify = createReducer(false, {
  [getVerifyUserSuccess]: (_, { payload }) => payload,
});

// отправка повторного письма верификации
const reVerify = createReducer(null, {
  [reVerificationtUserSuccess]: (_, { payload }) => payload,
});

// получаю рефреш токен
const refreshToken = createReducer(null, {
  [refreshTokenAction]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
  waiting,
  verify,
  reVerify,
  refreshToken,
});
