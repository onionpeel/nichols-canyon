import axios from 'axios';
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS} from './types';

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
  }catch (err) {
    console.log(err);
  };
};

export const logout = dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
  localStorage.removeItem('token');
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
    const token = res.data.token;
    localStorage.setItem('token', token);
  }catch (err) {
    console.log(err);
  };
};
