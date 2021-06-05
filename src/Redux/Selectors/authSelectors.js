const getIsAutheticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getWaiting = state => state.auth.waiting;
const getVerify = state => state.auth.verify;
const reVerify = state => state.auth.reVerify;
console.log(reVerify);

export {
  getIsAutheticated,
  getUserName,
  getUserEmail,
  getWaiting,
  getVerify,
  reVerify,
};
