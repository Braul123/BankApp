import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { AtomPropsText } from '../../types/interfaces';

const TextAtom: React.FC<AtomPropsText> = ({
    text,
    style
}) => {
  const {colors} = useTheme();
  return <Text style={[styles.label, colors.colorText, {...style}]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default React.memo(TextAtom);
