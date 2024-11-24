import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { fetchGetProducts } from '../services/api/productService'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';
import CardProduct from '../components/atoms/CardProduct';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import SkeletonItemProduct from '../components/atoms/SkeletonItemProduct';
import SkeletonListProduct from '../components/molecules/SkeletonListProduct';
import { getStylesCard } from '../services/utils/styleUtils';
import NotFoundData from '../components/atoms/NotFoundData';

export default function Home() {
  const MemoizedCardProduct = React.memo(CardProduct);
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const navigation: any = useNavigation();
  const [products, setProducts] = useState<any>([]);
  const [isProgress, setIsProgress] = useState(true);

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
        setIsProgress(false);
        setRefreshing(false);
      }, 500);
      console.log('PRODUCTOS',_products.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Renderiza cada item del FlatList
  const renderItem = useCallback(({ item, index }: { item: ProductType, index: number }) => {
    const stylesCard = getStylesCard(index, products.length);
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
        {
          !isProgress && products.length > 0 && (
            <View style={{height: 50, width: '100%', marginBottom:16, backgroundColor: 'blue'}}></View>
          )
        }
 
          {
            isProgress ? (
              <View style={{flex: 1}}>
                <SkeletonListProduct numberOfSkeletons={5}/>
              </View>
            ): (
              <>
                {
                  products.length === 0 ? (
                    <View style={{flex:1}}>
                      <NotFoundData
                      width={240}
                      heigth={300}
                      textBottom={'Opps! No se encontró nada aquí, crea tu primer producto desde el botón Agregar.'}/>
                    </View>
                  ) : (
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
                  )
                }
              </>
            )
          }
          <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
            <ButtonPrimary onPress={() => createProduct()} title={'Agregar'} status={'enabled'} typeButton={'primary'}/>
          </View>
      </View>
    </MainLayout>
  )
}