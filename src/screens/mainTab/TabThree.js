import React from 'react';
import {View} from 'react-native';
import Text from '../../assets/styledComponents/Text'
  
class TabThree extends React.Component {

  static navigationOptions = {
    headerShown: false
  };
  
  render() {
    return (
      <View>
        <View style={{height:200, width:200}} />
        <Text style={{fontSize:20, color: "black", marginBottom: 30}}>MainStackNavigator - TabThree</Text>
        <Text 
          onPress={() => this.props.navigation.navigate("AuthStackNavigator")} 
          style={{fontSize:20, color: "red", marginBottom: 30}}>
          Go back to AuthStackNavigator
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("TabOne")} 
          style={{fontSize:20, color: "green", marginBottom: 30}}>
          Go to TabOne
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("TabTwo")} 
          style={{fontSize:20, color: "green", marginBottom: 30}}>
          Go to TabTwo
        </Text>
      </View>
    )
  }

}
  
export default TabThree