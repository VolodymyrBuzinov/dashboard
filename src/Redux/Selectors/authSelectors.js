const getIsAutheticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getWaiting = state => state.auth.waiting;

export { getIsAutheticated, getUserName, getUserEmail, getWaiting };
