import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import { LabelAtomProps } from '../../types/interfaces';

export default function LabelAtom(data: LabelAtomProps) {
  const {colors} = useTheme();

  return <Text style={[styles.label, colors.colorText]}>{data.text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
