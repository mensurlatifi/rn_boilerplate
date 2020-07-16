import {createStackNavigator} from 'react-navigation-stack'
import MainTabNavigator from '../navigation/MainTabNavigator';
// import Settings from  '../screens/mainTab/singlePages/Settings';

export const MainStackNavigator = createStackNavigator(
  {  
    MainTabNavigator,
    // Settings
  },
  {
    headerMode: 'none',
    navigationOptions: {
      swipeEnabled: false,
      cardStyle: {
        backgroundColor: '#fff',
      },
    },
  }
);

export default MainStackNavigator;
