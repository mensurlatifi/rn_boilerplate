import React from 'react';
import {View} from 'react-native';
import Text from '../../assets/styledComponents/Text'

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{height:200, width:200}} />
        <Text style={{fontSize:20, color: "red", marginBottom: 30}}>AuthStackNavigator - LoginScreen</Text>
        <Text 
          onPress={() => this.props.navigation.navigate("InfoScreen")} 
          style={{fontSize:20, color: "blue", marginBottom: 30}}>
          Go back to InfoScreen
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("ResetPassword")} 
          style={{fontSize:20, color: "red", marginBottom: 30}}>
          Go back to ResetPassword
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("RegisterScreen")} 
          style={{fontSize:20, color: "red", marginBottom: 30}}>
          Go back to RegisterScreen
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("MainStackNavigator")} 
          style={{fontSize:20, color: "black", marginBottom: 30}}>
          Go to MainStackNavigator
        </Text>
      </View>
    )
  }

}

export default LoginScreen