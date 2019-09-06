import {CATCH_ERROR, CLEAR_ERROR} from '../actions/types';

const initialState = {
  errorStatus: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATCH_ERROR:
      return {
        errorMessage: action.payload.message,
        errorStatus: 'activeError'
      };
    case CLEAR_ERROR:
      return {
        errorStatus: null
      };
    default:
      return state;
  };
};
