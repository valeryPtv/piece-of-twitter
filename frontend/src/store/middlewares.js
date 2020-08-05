import { setAuthorizationHeader } from 'services/api';

export const createAxiosAuthMiddleware = () => next => action => {
  if (action.type === 'persist/REHYDRATE') {
    const accessToken = action.payload ? action.payload.user : null;
    setAuthorizationHeader(accessToken);
  }
  return next(action);
};
