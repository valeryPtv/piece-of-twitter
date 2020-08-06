import * as actionTypes from 'store/user/actionTypes';

const initialState = {
  accessToken: null,
  credentials: {},
  likes: [],
  notifications: [],
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
      return {
        ...state,
        accessToken: action.accessToken
      };
    case actionTypes.CHANGE_AUTH_PROGRESS_STATUS:
      return {
        ...state,
        isAuthInProgress: action.isAuthInProgress
      };
    case actionTypes.GET_USER: {
      console.log('getUser reducer', action);
      return {
        ...state,
        credentials: {
          ...action.user.credentials
        },
        likes: [...action.user.likes],
        notifications: [...action.user.notifications]
      };
    }
    default: return state;
  }
};
