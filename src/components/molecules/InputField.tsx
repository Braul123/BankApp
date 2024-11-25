import React from 'react';
import {View, StyleSheet, KeyboardTypeOptions} from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import InputAtom from '../atoms/Input';
import ErrorInput from '../atoms/ErrorInput';
import { InputFieldProps } from '../../types/interfaces';

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  error,
  maxLength,
  datePicker,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <LabelAtom text={label} />
      <InputAtom
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        error={error}
        maxLength={maxLength}
        datePicker={datePicker}
        disabled={disabled ? true : false}
      />
      {error && (
        <ErrorInput text={error} />
      )}
    </View>
  );
}

export default React.memo(InputField);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'column',
    gap: 0,
  },
});
