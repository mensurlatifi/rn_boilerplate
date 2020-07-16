import {createStackNavigator} from 'react-navigation-stack'
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ResetPassword from  '../screens/auth/ResetPassword';

export const AuthStackNavigator = createStackNavigator(
  {  
    LoginScreen,
    RegisterScreen,
    ResetPassword
  }, 
  {
    headerMode: 'none'
  }
);

export default AuthStackNavigator;
