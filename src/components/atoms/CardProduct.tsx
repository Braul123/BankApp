import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useCallback } from 'react';
import {useTheme} from '../../context/ThemeContext';
import IconApp from '../../assets/icons/AllCustomIcons';
import { CardProductProps } from '../../types/interfaces';
import { useNavigation } from '@react-navigation/native';
import { useProduct } from '../../context/ProductContext';

const CardProduct: React.FC<CardProductProps> = ({item, stylesCard}) => {
  const navigation: any = useNavigation();
  const {colors} = useTheme();
  const {saveProduct} = useProduct();

  const openDetailProduct = useCallback(() => {
    saveProduct(item);
    navigation.navigate('DetailProduct', {item});
  }, [navigation, item]);


  return (
    <View style={[styles.container, colors.borderVariant, {...stylesCard}]}>
      <TouchableOpacity style={styles.info} onPress={openDetailProduct}>
        <Text style={[colors.colorText, styles.title]}>{item?.name}</Text>
        <Text style={[colors.colorText, styles.id]}>ID: {item?.id}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} style={styles.icon} onPress={openDetailProduct}>
        <IconApp
          name={'keyboard-arrow-right'}
          size={25}
          directoryName={'MaterialIcons'}
          color={colors?.borderVariant?.borderColor}
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
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 3,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    userSelect: 'text',
  },
  id: {
    fontSize: 12,
    lineHeight: 16,
    userSelect: 'text',
  },
});
