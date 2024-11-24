import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface LabelAtomProps {
  text: string;
}

export default function ErrorInput(data: LabelAtomProps) {
  return <Text style={[styles.label]}>{data.text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'red',
    // fontWeight: 'bold',
  },
});
