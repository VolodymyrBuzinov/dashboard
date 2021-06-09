import axios from 'axios';
import { AxiosToken, BaseURL } from '../../Api/AxiosToken';

import {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutSuccess,
  logoutError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  getCurrentUserError,
  getVerifyUserSuccess,
  getVerifyUserError,
  reVerificationtUserStart,
  reVerificationtUserSuccess,
  reVerificationtUserError,
  getRefreshTokenStart,
  getRefreshTokenSuccess,
  getRefreshTokenError,
  refreshTokenAction,
} from '../Actions/authAction';
import { toast } from 'react-toastify';

BaseURL();

const refToken = () => async (dispatch, getState) => {
  dispatch(getRefreshTokenStart());
  const {
    auth: { refreshToken: persistedReToken },
  } = getState();

  const reToken = { refreshToken: persistedReToken };
  if (!persistedReToken) {
    return;
  }

  try {
    const response = await axios.post('/users/refresh', reToken);
    AxiosToken().set(response.data.data.token);
    dispatch(getRefreshTokenSuccess(response.data.data));
  } catch (error) {
    dispatch(getRefreshTokenError(error.message));
  }
};

const registerAuth = credentials => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(response.data.data));
    toast.info('You are successfully registered!')
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const loginAuth = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/users/login', credentials);

    AxiosToken().set(response.data.data.token);
    dispatch(refreshTokenAction(response.data.data.refreshToken));
    dispatch(loginSuccess(response.data.data));
    toast.info('Welcam to Questify!')
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOutAuth = () => async dispatch => {
  dispatch(logoutStart());
  try {
    await axios.post('/users/logout');
    AxiosToken().unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.response.status));
  }
};

const reVerificationt = credentials => async dispatch => {
  dispatch(reVerificationtUserStart());
  try {
    const response = await axios.post('/users/verify', credentials);
    dispatch(reVerificationtUserSuccess(response.data.data));
  } catch (error) {
    dispatch(reVerificationtUserError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  AxiosToken().set(persistedToken);
  dispatch(getCurrentUserStart());
  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.response.status));
  }
};

const verify = eve => async dispatch => {
  try {
    dispatch(getVerifyUserSuccess(eve));
  } catch (error) {
    dispatch(getVerifyUserError(error.message));
  }
};

export {
  registerAuth,
  loginAuth,
  logOutAuth,
  getCurrentUser,
  verify,
  reVerificationt,
  refToken,
};
