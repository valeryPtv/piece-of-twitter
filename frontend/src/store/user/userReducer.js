import * as actionTypes from 'store/user/actionTypes';

const initialState = {
  accessToken: null,
  userName: null,
  userEmail: null,
  isAuthInProgress: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        accessToken: action.accessToken
      };
    case actionTypes.SIGN_UP:
      return state;
    case actionTypes.CHANGE_AUTH_PROGRESS_STATUS:
      return {
        ...state,
        isAuthInProgress: action.isAuthInProgress
      };
    default: return state;
  }
};
