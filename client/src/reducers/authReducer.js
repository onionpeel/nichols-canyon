import {REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        user: null,
        token: null
      };
    default:
      return state;
  }
};
