import {AsyncStorage} from 'react-native';

export default (token) => {
  AsyncStorage.setItem('access_token', token);
}
