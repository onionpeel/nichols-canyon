import {ALL_COMMENTS} from '../actions/types';

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
    return state;
  };
};
