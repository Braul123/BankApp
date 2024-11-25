import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import {styles} from '../styles/detail.styles';
import TitlePages from '../components/atoms/TitlePages';
import {useProduct} from '../context/ProductContext';
import ProductDetailSections from '../components/organism/ProductDetailSections';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import {ProductType} from '../types/types';
import ConfirmModal from '../components/molecules/modals/ConfirmationModal';
import { fetchDeleteProduct } from '../services/api/productService';

export default function DetailProduct() {
  const {product} = useProduct();
  const navigation: any = useNavigation();
  const [productData, setProductData] = useState<ProductType | null>(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  // Función para editar el producto
  const editProduct = useCallback(() => {
    navigation.navigate('FormProduct', {isEdit: true});
  }, [navigation]);

  useEffect(() => {
    if (product) {
      setProductData(product);
    }
  }, [product]);

  // goBack
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Función para eliminar el producto
  const deleteProductAction = useCallback(async () => {
    setIsVisibleModal(false);
    try {
      await fetchDeleteProduct(productData?.id!);
      Alert.alert('Éxito', 'Producto eliminado correctamente', [
        {
          text: 'Aceptar',
          onPress: () => goBack(),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error eliminando el producto');
    }
  },[productData]);

  // Abre la modal de confirmación
  const openModal = useCallback(() => {
    setIsVisibleModal(true);
  }, []);

  return (
    <MainLayout>
      <View style={styles.flex}>
        <View>
          <TitlePages
            title={`ID ${product?.id}`}
            subtitle={'Información extra'}
          />
        </View>
        <View style={styles.flex}>
          <ScrollView
            contentContainerStyle={styles.contentScroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {productData && productData.id && (
              <ProductDetailSections {...productData} />
            )}
          </ScrollView>
        </View>
        {/* Botones de envío y reinicio */}
        <View style={styles.contentButtonForm}>
          <ButtonPrimary
            onPress={editProduct}
            title={'Editar'}
            status={'enabled'}
            typeButton={'secondary'}
            style={{height: 50}}
          />
          <ButtonPrimary
            onPress={openModal}
            title={'Eliminar'}
            status={'enabled'}
            typeButton={'primary'}
            style={{
              backgroundColor: '#d50000',
              marginTop: 10,
              height: 50,
            }}
            textStyles={{color: '#ffffff'}}
          />
        </View>
      </View>

      <ConfirmModal
        visible={isVisibleModal}
        message={`¿Estás seguro de eliminar el producto ${productData?.name}?`}
        onConfirm={() => deleteProductAction()}
        onCancel={() => setIsVisibleModal(false)}
      />
    </MainLayout>
  );
}
