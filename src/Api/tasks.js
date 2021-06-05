import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com';

const baseURL = axios.defaults.baseURL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
const exp = {baseURL, token}

export default exp;