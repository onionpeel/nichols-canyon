import {CATCH_ERROR, CLEAR_ERROR} from './types';

export const setError = (message, status) => {
  return {
    type: CATCH_ERROR,
    payload: {
      message,
      status
    }
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};
