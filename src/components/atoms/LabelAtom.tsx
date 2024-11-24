import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {AtomPropsText} from '../../types/interfaces';

const LabelAtom: React.FC<AtomPropsText> = ({text}) => {
  const {colors} = useTheme();
  return <Text style={[styles.label, colors.colorText]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default React.memo(LabelAtom);
