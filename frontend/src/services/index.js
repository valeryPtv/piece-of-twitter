import axios from 'axios';

// 'https://europe-west1-socialape-d081e.cloudfunctions.net/api';
axios.defaults.baseURL = 'https://europe-west1-socialape228.cloudfunctions.net/api';

export const signin = async credentials => {
  try {
    const res = await axios.post('/login', credentials);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const signup = async credentials => {
  try {
    const res = await axios.post('/signup', credentials);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};
