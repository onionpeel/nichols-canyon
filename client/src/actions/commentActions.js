import axios from 'axios';
import {ALL_COMMENTS} from './types';

export const getAllComments = () => async (dispatch, getState) => {
  try{
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };

    if(token) {
      const res = await axios.get('/comment', config);
      dispatch({
        type: ALL_COMMENTS,
        payload: res.data
      });
    };
  }catch(err) {
    console.log('Get all comments error', err);
  };
};
