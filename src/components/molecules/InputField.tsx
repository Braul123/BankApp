import React from 'react';
import {View, StyleSheet, KeyboardTypeOptions} from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import InputAtom from '../atoms/Input';
import ErrorInput from '../atoms/ErrorInput';
import { TypeDatePickerInput } from '../../types/types';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  error: any;
  maxLength: number;
  datePicker?: TypeDatePickerInput;
  disabled?: boolean;
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
        datePicker={data.datePicker}
        disabled={data.disabled ? true : false}
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
