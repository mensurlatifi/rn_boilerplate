import {CURRENT_USER, ROOT_PATH, LOG_OUT} from './types';
import axios from 'axios';
import removeToken from '../services/removeToken';
import storeToken from '../services/storeToken';

export function registerUser ({username, email, password}, loginResult) {
  return function(dispatch) {
     axios.post(`${ROOT_PATH}/api/auth/register`, null, {
       data: {
          username: username,
          email: email,
          password: password
       }
     })
     .then(async (response) => {
        if(response.status == 200) {
          loginUserSuccess(dispatch, response)
          } else { 
            console.log("Something went wrong")
          }
          loginResult(response.data)
        })
        .catch(response => {
          loginResult(response.response.data, true)
     })
  }
}

export function logIn ({ username, password }, loginResult) {
    return function(dispatch) {
       axios.post(`${ROOT_PATH}/api/auth/login`, null, {
         data: {
           username: username,
           password: password
         }
       })
       .then(async (response) => {
         if(response.status == 200) {
           loginUserSuccess(dispatch, response)
         } else { 
           console.log("Something went wrong")
          }
         loginResult(response.data)
         
       })
       .catch(response => {
         loginResult(response.response.data, true)
       })
    }
  }

const loginUserSuccess = async (dispatch, response) => {
  dispatch({
    type: CURRENT_USER,
    payload: response.data.user
  })
  try {
    storeToken(response.data.access_token);
    } catch (error) {
      console.log("ASYNC STORAGE ERROR", error)
  }
}

export const logOut = (afterLogOutScreen) => {
  return async function(dispatch) {
    dispatch({
      type: LOG_OUT
    })
    removeToken()
    afterLogOutScreen()
  }
};