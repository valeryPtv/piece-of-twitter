import axios from 'axios';

// 'https://europe-west1-socialape-d081e.cloudfunctions.net/api';

const instance = axios.create({
  baseURL: 'https://europe-west1-socialape228.cloudfunctions.net/api'
});

const setAuthorizationHeader = accessToken => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export { instance as axios, setAuthorizationHeader };
