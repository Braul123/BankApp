import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import MainLayout from '../layouts/MainLayout';


export default function Welcome() {
    const { colors } = useTheme();
  return (
    <MainLayout>
      <View style={{flex: 1}}>
        <Text style={colors.colorText}>Welcome</Text>
      </View>
    </MainLayout>
  )
}