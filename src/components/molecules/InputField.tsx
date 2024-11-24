import React from 'react';
import {View, StyleSheet, KeyboardTypeOptions} from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import InputAtom from '../atoms/Input';
import ErrorInput from '../atoms/ErrorInput';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  error: any;
  maxLength: number;
}

export default function InputField(data: InputFieldProps) {
  return (
    <View style={styles.container}>
      <LabelAtom text={data.label} />
      <InputAtom
        placeholder={data.placeholder}
        value={data.value}
        onChangeText={data.onChangeText}
        keyboardType={data.keyboardType}
        error={data.error}
        maxLength={data.maxLength}
      />
      {data.error && (
        <ErrorInput text={data.error} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'column',
    gap: 0,
  },
});
