import {combineReducers} from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  comm: commentReducer,
  err: errorReducer
});
