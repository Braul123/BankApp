import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import {styles} from '../styles/detail.styles';
import TitlePages from '../components/atoms/TitlePages';
import {useProduct} from '../context/ProductContext';
import ProductDetailSections from '../components/organism/ProductDetailSections';
import ButtonPrimary from '../components/atoms/ButtonPrimary';

export default function DetailProduct() {
  const {product} = useProduct();

  useEffect(() => {
    console.log('ESTE ES EL PRODUCTO', product);
  }, [product]);

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

            {product && product.id && <ProductDetailSections {...product} />}

          </ScrollView>
        </View>
        {/* Botones de envío y reinicio */}
        <View style={styles.contentButtonForm}>
          <ButtonPrimary
            onPress={undefined}
            title={'Editar'}
            status={'enabled'}
            typeButton={'secondary'}
            style={{height: 50}}
          />
          <ButtonPrimary
            onPress={undefined}
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
    </MainLayout>
  );
}
