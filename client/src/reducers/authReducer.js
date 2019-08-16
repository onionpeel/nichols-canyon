import {REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS, USER_LOADED} from '../actions/types';

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
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
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
