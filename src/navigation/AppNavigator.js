import {createAppContainer, createSwitchNavigator} from "react-navigation";
import InfoScreen from '../screens/info/InfoScreen';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

export const SwitchNavigator = createSwitchNavigator(
  {  
    InfoScreen,
    AuthStackNavigator,
    MainStackNavigator
  });

const AppNavigator = createAppContainer(SwitchNavigator);

export default AppNavigator;
