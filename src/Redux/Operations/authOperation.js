import axios from 'axios';
import { toast } from 'react-toastify';
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
    toast.info('You are successfully registered!');
  } catch (error) {
   // dispatch(registerError(error.message));
    //toast.error('Something went wrong...');
    dispatch(registerError(toast.error(`${error.message}`)));
  }
};

const loginAuth = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/users/login', credentials);

    AxiosToken().set(response.data.data.token);
    dispatch(refreshTokenAction(response.data.data.refreshToken));
    dispatch(loginSuccess(response.data.data));
    toast.info('Welcоme to Questify!')
  } catch (error) {
    //dispatch(loginError(error.message));
    dispatch(loginError(toast.error(`${error.message}`)));
  }
};

const logOutAuth = () => async dispatch => {
  dispatch(logoutStart());
  try {
    await axios.post('/users/logout');
    AxiosToken().unset();
    dispatch(logoutSuccess());
    toast.info('You are successfully logOut!')
  } catch (error) {
    //dispatch(logoutError(error.response.status));
    dispatch(logoutError(toast.error(`${error.response.status}`)));
  }
};

const reVerificationt = credentials => async dispatch => {
  dispatch(reVerificationtUserStart());
  try {
    const response = await axios.post('/users/verify', credentials);
    dispatch(reVerificationtUserSuccess(response.data.data));
    toast.info('Reverification email has been sent to you.')
  } catch (error) {
    //dispatch(reVerificationtUserError(error.message));
    dispatch(reVerificationtUserError(toast.error(`${error.message}`)));
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
    toast.info('Verification email has been sent to you.')
  } catch (error) {
    //dispatch(getVerifyUserError(error.message));
    dispatch(getVerifyUserError(toast.error(`${error.message}`)));
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
