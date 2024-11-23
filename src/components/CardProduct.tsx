import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';



export default function CardProduct(item: ProductType) {
  const { colors } = useTheme();

  return (
    <View style={[{padding: 10, borderWidth: 1}, colors.borderVariant]}>
      <Text style={colors.colorText}>{item.name}</Text>
      <Text style={colors.colorText}>{item.description}</Text>
    </View>
  )
}