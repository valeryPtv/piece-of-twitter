import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from 'store/user/userReducer';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
