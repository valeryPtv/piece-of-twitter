import * as actionTypes from 'store/user/actionTypes';
import { signin, signup } from 'services/user';
import { setAuthorizationHeader } from 'services/api';

export const signUpAction = (credentials, pushToHistory) => async dispatch => {
  try {
    const res = await signup(credentials);
    dispatch({
      type: actionTypes.SIGN_UP,
      accessToken: res.data.token
    });
    setAuthorizationHeader(res.data.token);
    console.log('signUpAction', res);
    pushToHistory('/');
  } catch (e) {
    console.error(e);
  }
};

export const signInAction = (credentials, pushToHistory) => async dispatch => {
  try {
    const res = await signin(credentials);
    console.log('signInAction res', res);
    dispatch({
      type: actionTypes.SIGN_UP,
      accessToken: res.data.token
    });
    setAuthorizationHeader(res.data.token);
    pushToHistory('/');
  } catch (e) {
    console.error(e);
  }
};
