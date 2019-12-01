import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedInReducer from './isLogged';

const allReducers = combineReducers({
  counter: counterReducer,
  loggedIn: isLoggedInReducer,
});

export default allReducers;
