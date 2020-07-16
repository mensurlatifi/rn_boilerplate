import React from 'react';
import {View} from 'react-native';
import Text from '../../assets/styledComponents/Text'

class ResetPassword extends React.Component {

  render() {
    return (
      <View>
        <View style={{height:200, width:200}} />
        <Text style={{fontSize:20, color: "red", marginBottom: 30}}>AuthStackNavigator - ResetPassword</Text>
        <Text 
          onPress={() => this.props.navigation.navigate("InfoScreen")} 
          style={{fontSize:20, color: "blue", marginBottom: 30}}>
          Go back to InfoScreen
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("LoginScreen")} 
          style={{fontSize:20, color: "red", marginBottom: 30}}>
          Go to LoginScreen
        </Text>
        <Text 
          onPress={() => this.props.navigation.navigate("RegisterScreen")} 
          style={{fontSize:20, color: "red", marginBottom: 30}}>
          Go to RegisterScreen
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

export default ResetPassword