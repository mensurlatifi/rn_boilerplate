import React from 'react';
import {View} from 'react-native';
import Text from '../../assets/styledComponents/Text'
  
class InfoScreen extends React.Component {

  render() {
    return (
      <View>
        <View style={{height:200, width:200}} />
        <Text style={{fontSize:20, color: "blue", marginBottom: 30}}>InfoScreen</Text>
        <Text 
          onPress={() => this.props.navigation.navigate("AuthStackNavigator")} 
          style={{fontSize:20, color: "red"}}>
          Go to AuthStackNavigator
        </Text>
      </View>
    )
  }

}
  
export default InfoScreen
