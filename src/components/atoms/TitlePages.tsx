import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import { TitlePagesProps } from '../../types/interfaces';

const TitlePages: React.FC<TitlePagesProps> = ({title, subtitle}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.titleContent]}>
      {title && <Text style={[colors.colorText, styles.title]}>{title}</Text>}
      {subtitle && (
        <Text style={[colors.colorText, styles.subtitle]}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContent: {
    flexDirection: 'column',
    gap: 3,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '500',
    userSelect: 'text',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    userSelect: 'text',
  },
});

export default React.memo(TitlePages);
