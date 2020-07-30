import { axios } from 'services/api';

export const signin = credentials => axios.post('/login', credentials);
export const signup = credentials => axios.post('/signup', credentials);
