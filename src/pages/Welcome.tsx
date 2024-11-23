import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';


export default function Welcome() {
    const { colors, isDarkMode } = useTheme();
  return (
    <View style={[{paddingTop: 70, flex: 1}, colors.backgroundStyle]}>
      <Text style={colors.colorText}>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'} {JSON.stringify(colors)}</Text>
    </View>
  )
}