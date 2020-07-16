import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'

import TabOne from '../screens/mainTab/TabOne';
import TabTwo from '../screens/mainTab/TabTwo';
import TabThree from '../screens/mainTab/TabThree';

import styles from '../assets/stylesheets/index';
import {calculateVerticalSize} from '../assets/stylesheets/ResponsiveSize';

const TabOneStack = createStackNavigator({
    TabOne: TabOne,
});

TabOneStack.navigationOptions = {
  tabBarLabel: 'TabOne',
  tabBarIcon: ({ focused }) => (
    focused ?   <Image 
                    resizeMode="contain" 
                    source={require('../assets/images/profile-icon.png')} 
                    style={styles.topBarIcons} 
                />
            :   <Image 
                    resizeMode="contain" 
                    source={require('../assets/images/profile.png')} 
                    style={styles.topBarIcons} 
                />
    )
};

const TabTwoStack = createStackNavigator({
  TabTwo: TabTwo,
});

TabTwoStack.navigationOptions = {
  tabBarLabel: 'TabTwo',
  tabBarIcon: ({ focused }) => (
    focused ?   <Image 
                    resizeMode="contain" 
                    source={require('../assets/images/profile-icon.png')} 
                    style={styles.topBarIcons} 
                />
            :   <Image 
                    resizeMode="contain" 
                    source={require('../assets/images/profile.png')} 
                    style={styles.topBarIcons} 
                />
    )
};

const TabThreeStack = createStackNavigator({
    TabThree: TabThree,
});

TabThreeStack.navigationOptions = {
    tabBarLabel: 'TabThree',
    tabBarIcon: ({ focused }) => (
        focused ?   <Image 
                        resizeMode="contain" 
                        source={require('../assets/images/profile-icon.png')} 
                        style={styles.topBarIcons} 
                    />
                :   <Image 
                        resizeMode="contain" 
                        source={require('../assets/images/profile.png')} 
                        style={styles.topBarIcons} 
                    />
    )
};

export default createMaterialTopTabNavigator({
    TabOneStack,
    TabTwoStack,
    TabThreeStack
}, {
    initialRouteName: 'TabOneStack',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            height:calculateVerticalSize(84),
            backgroundColor: 'grey',
            paddingBottom: calculateVerticalSize(20),
            borderTopColor: "transparent",
            justifyContent:'center'
        },
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
        showLabel: false,
        showIcon: true,
    }
 }
);