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
} from './authAction';

const initial = { name: null, email: null };

const user = createReducer(initial, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initial,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

const waiting = createReducer(false, {
  [loginStart]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [registerStart]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
  waiting,
});
