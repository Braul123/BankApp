import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import IconApp from '../../assets/icons/AllCustomIcons';
import { CardProductProps } from '../../types/interfaces';

const CardProduct: React.FC<CardProductProps> = ({item, stylesCard}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, colors.borderVariant, {...stylesCard}]}>
      <View style={styles.info}>
        <Text style={[colors.colorText, styles.title]}>{item?.name}</Text>
        <Text style={[colors.colorText, styles.id]}>ID: {item?.id}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.6} style={styles.icon}>
        <IconApp
          name={'keyboard-arrow-right'}
          size={25}
          directoryName={'MaterialIcons'}
          color={colors.borderVariant.borderColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CardProduct);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  info: {
    width: '85%',
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    userSelect: 'text',
  },
  id: {
    fontSize: 16,
    lineHeight: 20,
    userSelect: 'text',
  },
});
