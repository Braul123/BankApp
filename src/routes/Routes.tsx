import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';


export default function Routes() {
  const Nav = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* Inicia la navegacion dependiendo del estado de login */}
        <Nav.Navigator initialRouteName={"Welcome"}>
            <Nav.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: 'Login',
              headerShown: false,
              gestureEnabled: false,
            }}></Nav.Screen>
            <Nav.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}></Nav.Screen>
        </Nav.Navigator>
    </NavigationContainer>
  )
}