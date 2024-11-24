import React from 'react';
import { TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { colorsMain } from '../../utils/colors';


interface InputAtomProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  error: string;
    maxLength: number;
}

export default function InputAtom(data: InputAtomProps) {
    const {colors, isDarkMode} = useTheme();

    return (
      <TextInput
        style={[styles.input, colors.colorText, {borderColor: data.error ? 'red' : colors.borderVariant.borderColor}]}
        placeholder={data.placeholder}
        placeholderTextColor={
        isDarkMode
            ? colorsMain.system.placeholderDarkMode
            : colorsMain.system.placeholderLigthMode
        }
        value={data.value}
        onChangeText={data.onChangeText}
        keyboardType={data.keyboardType}
        maxLength={data.maxLength}
      />
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 60,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,

    },
  });
