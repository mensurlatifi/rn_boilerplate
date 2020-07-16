import {CURRENT_USER, LOG_OUT} from '../actions/types'

const defaultState = {
    username: '',
    email: '',
    password: ''
};

export default function currentUser(state = defaultState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, ...action.payload }
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}