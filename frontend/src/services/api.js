import axios from 'axios';

// 'https://europe-west1-socialape-d081e.cloudfunctions.net/api';
axios.defaults.baseURL = 'https://europe-west1-socialape228.cloudfunctions.net/api';

export { axios } from 'axios';

export const setAuthorizationHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
