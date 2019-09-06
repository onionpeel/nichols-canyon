import axios from 'axios';
import {REGISTER_SUCCESS, LOGOUT_SUCCESS, LOGIN_SUCCESS, USER_LOADED} from './types';
import {setError, clearError} from './errorActions';

export const loadUser = () => async (dispatch, getState) => {
  try{
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    };

    if(token) {
      const res = await axios.get('/user/me', config);
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    };
  }catch(err) {
    console.log('The authActions error', err);
  };
};

export const register = ({name, email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({name, email, password});

  try{
    const res = await axios.post('/user', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    const token = res.data.token;
    localStorage.setItem('token', token);

    dispatch(clearError());
  }catch (err) {
    dispatch(setError(err.response.data.errors[0].msg));
  };
};

export const logout = dispatch => {
  localStorage.removeItem('token');

  dispatch({
    type: LOGOUT_SUCCESS
  });
};

export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({email, password});

  try{
    const res = await axios.post('/authenticate', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(clearError());

    const token = res.data.token;
    localStorage.setItem('token', token);
  }catch (err) {
    dispatch(setError(err.response.data.errors[0].msg));
  };
};
