import axios from 'axios';
import {ALL_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from './types';
import {setError} from './errorActions';

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
    dispatch(setError(err.response.data, err.response.status));
  };
};

export const addComment = comment => async dispatch => {
  try{
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };

    if(token) {
      const res = await axios.post('/comment', comment, config);
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
    };
  }catch(err) {
    dispatch(setError(err.response.data, err.response.status));
  };
};

export const deleteComment = id => async dispatch => {
  try{
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };

    if(token) {
      await axios.delete(`/comment/${id}`, config);
      const comments = await axios.get('/comment', config);
        dispatch({
          type: DELETE_COMMENT,
          payload: comments.data
      });
    };
  }catch(err) {
    console.log('Delete error', err);
  };
};

export const updateComment = (comment, id) => async dispatch => {
  try{
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };

    if(token) {
      await axios.patch(`/comment/${id}`, comment, config);
      const comments = await axios.get('/comment', config);
      dispatch({
        type: UPDATE_COMMENT,
        payload: comments.data
      });
    };
  }catch(err) {
    console.log('Add comment error', err);
  };
};
