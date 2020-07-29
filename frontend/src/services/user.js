import api from 'services/api';

export const signin = credentials => api.post('/login', credentials);
export const signup = credentials => api.post('/signup', credentials);
