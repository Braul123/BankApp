import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Forms from '../pages/Forms';
import Header from '../layouts/Header';
import {useTheme} from '../context/ThemeContext';

export default function Routes() {
  const Nav = createNativeStackNavigator();
  const {colors} = useTheme();
  return (
    <SafeAreaView style={[colors.backgroundStyle, {flex: 1}]}>
      <NavigationContainer>
        <Header />
        <Nav.Navigator initialRouteName={'Welcome'}>
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
          <Nav.Screen
            name="Forms"
            component={Forms}
            options={{
              headerShown: false,
              gestureEnabled: true,
            }}></Nav.Screen>
        </Nav.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
