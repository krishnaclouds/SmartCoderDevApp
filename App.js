import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/mainScreen';

const { Navigator, Screen } = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Navigator screenOptions={{
          headerShown : false
        }}>
          <Screen name="mainScreen" component={MainScreen}/>
        </Navigator>
      </NavigationContainer>
    )
  }
}