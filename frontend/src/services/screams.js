import { axios } from 'services/api';
import { store } from 'store';

export const getScreams = () => axios.get('/screams');
export const likeScream = screamId => axios.get(`/scream/${screamId}/like`);
export const unlikeScream = screamId => axios.get(`/scream/${screamId}/unlike`);
export const deleteScream = screamId => axios.delete(`/scream/${screamId}`, {
  headers: {
    Authorization: `Bearer ${store.getState().user.accessToken}`
  }
});
