import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './Screens/home'
import ISStracker from './Screens/ISStracker'
import Meteorscreen from './Screens/meteor'
import{NavigationContainer}from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'
const Stack=createStackNavigator()
function App(){
return(
  <NavigationContainer>
  <Stack.Navigator initiaRouteName="Home" screenOptions={{headerShown:false}}>
  <Stack.Screen name="Home" component={Homescreen}/ >
  <Stack.Screen name="ISS" component={ISStracker}/ >
  <Stack.Screen name="Meteor" component={Meteorscreen}/ >
  </Stack.Navigator>
  </NavigationContainer>
)
}
export default App 