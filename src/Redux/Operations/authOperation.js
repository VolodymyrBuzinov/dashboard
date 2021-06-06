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
} from '../Actions/authAction';

BaseURL();

const registerAuth = credentials => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(response.data.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const loginAuth = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/users/login', credentials);

    AxiosToken().set(response.data.data.token);

    dispatch(loginSuccess(response.data.data));
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
    dispatch(logoutError(error.message));
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
    dispatch(getCurrentUserError(error.message));
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
};
