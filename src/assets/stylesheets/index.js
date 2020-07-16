import {StyleSheet} from 'react-native';
import {calculateHorisontalSize, calculateVerticalSize} from './ResponsiveSize';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor:"#fff" 
  },
  topBarIcons:{
    height:calculateVerticalSize(35), 
    width:calculateHorisontalSize(30)
  }
})

export default styles;
