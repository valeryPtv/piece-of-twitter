import * as actionTypes from 'store/user/actionTypes';
import { signin, signup, getUser } from 'services/user';
import { setAuthorizationHeader } from 'services/api';

export const signUpAction = (credentials, pushToHistory) => async dispatch => {
  try {
    const res = await signup(credentials);
    dispatch({
      type: actionTypes.SIGN_UP,
      accessToken: res.data.token,
      email: credentials.email,
      handle: credentials.handle
    });
    setAuthorizationHeader(res.data.token);
    dispatch(getUserAction());
    pushToHistory('/');
  } catch (e) {
    console.error(e);
  }
};

export const signInAction = (credentials, pushToHistory) => async dispatch => {
  try {
    const res = await signin(credentials);
    dispatch({
      type: actionTypes.SIGN_IN,
      accessToken: res.data.token
    });
    setAuthorizationHeader(res.data.token);
    dispatch(getUserAction());
    pushToHistory('/');
  } catch (e) {
    console.error(e);
  }
};

export const getUserAction = () => async (dispatch, getState) => {
  try {
    console.log('getUserAction', getState());
    const { data } = await getUser();
    dispatch({
      type: actionTypes.GET_USER,
      user: data
    });
  } catch (e) {
    console.error(e);
  }
};
