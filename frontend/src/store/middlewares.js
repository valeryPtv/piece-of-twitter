import { setAuthorizationHeader } from 'services/api';
import { getUserAction } from 'store/user/userActions';

export const onStatePersist = ({ dispatch }) => next => action => {
  if (action.type === 'persist/REHYDRATE') {
    const accessToken = action.payload ? action.payload.user.accessToken : null;
    console.log('onStatePersist token', accessToken);
    if (accessToken) {
      setAuthorizationHeader(accessToken);
      dispatch(getUserAction());
    }
  }
  return next(action);
};
