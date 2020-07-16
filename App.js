import React, {Component}  from 'react';
import {View, StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import styles from './src/assets/stylesheets/index'
import {Provider} from 'react-redux';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <StatusBar barStyle="light-content" 
            hidden={false} 
            translucent={true}
            backgroundColor={'transparent'} />
            <AppNavigator />
        </View>
      </Provider>
    );
  }
}