import {Text, StyleSheet} from 'react-native';
import React from 'react';
import { AtomPropsText } from '../../types/interfaces';

const ErrorInput : React.FC<AtomPropsText> = ({
  text
}) => {
  return <Text style={[styles.label]}>{text}</Text>;
}

export default React.memo(ErrorInput);

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'red',
  },
});