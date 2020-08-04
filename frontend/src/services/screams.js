import { axios } from 'services/api';

export const getScreams = () => axios.get('/screams');
export const likeScream = screamId => axios.get(`/scream/${screamId}/like`);
