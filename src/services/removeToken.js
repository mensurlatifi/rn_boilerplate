import {AsyncStorage} from 'react-native';

export default () => {
  AsyncStorage.removeItem('access_token')
}