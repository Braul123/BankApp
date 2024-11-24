import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { fetchGetProducts } from '../services/api/productService'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';
import CardProduct from '../components/atoms/CardProduct';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const MemoizedCardProduct = React.memo(CardProduct);
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const navigation: any = useNavigation();
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    getProducts();
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getProducts();
  }, []);
  
  // Obtiene los productos
  const getProducts = async () => {
    try {
      const _products: any = await fetchGetProducts();
      setProducts(_products.data);
      setTimeout(() => {
        setRefreshing(false);
      }, 500);
      console.log('PRODUCTOS',_products.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Renderiza cada item del FlatList
  const renderItem = useCallback(({ item, index }: { item: ProductType, index: number }) => {
    let stylesCard: any;

    // Aplica los bordes redondeados al primer y último item
    switch (index) {
      case 0:
        stylesCard = {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }
        break;
      case products.length - 1:
        stylesCard = {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }
        break;
      default:
        stylesCard = {
          borderBottomWidth: 1,
        }
        break;
    }

    return (
      <MemoizedCardProduct item={item} stylesCard={stylesCard}/>
    )
  }, [products]);

  // Redirecciona a la vista de creacion de producto
  const createProduct = useCallback(() => {
    navigation.navigate({name: 'Forms', params: {type: 'create'}});
  }, [navigation]);

  return (
    <MainLayout>
      <View style={{flex: 1}}>
          <View style={{height: 50, width: '100%', marginBottom:16, backgroundColor: 'blue'}}></View>
          <FlatList
            style={[colors.borderVariant]}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <View style={{paddingVertical: 10, paddingHorizontal: 16}}>
            <ButtonPrimary onPress={() => createProduct()} title={'Agregar'} status={'enabled'} typeButton={'primary'}/>
          </View>
      </View>
    </MainLayout>
  )
}