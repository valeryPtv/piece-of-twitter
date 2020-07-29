import * as actionTypes from 'store/user/actionTypes';
import { signin, signup } from 'services/user';

export const signUpAction = credentials => async dispatch => {
  try {
    const res = await signup(credentials);
    console.log('signUpAction', res);
    dispatch({
      type: actionTypes.SIGN_UP,
      accessToken: res.data.token
    });
  } catch (e) {
    console.error(e);
  }
};

export const signInAction = credentials => async dispatch => {
  try {
    const res = await signin(credentials);
    console.log('signUpAction', res);
    dispatch({
      type: actionTypes.SIGN_UP,
      accessToken: res.data.token
    });
  } catch (e) {
    console.error(e);
  }
};
