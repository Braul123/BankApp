import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { fetchGetProducts } from '../services/api/productService'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';
import CardProduct from '../components/atoms/CardProduct';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import SkeletonListProduct from '../components/molecules/SkeletonListProduct';
import { getStylesCard } from '../services/utils/styleUtils';
import NotFoundData from '../components/atoms/NotFoundData';
import SearchApp from '../components/molecules/SearchApp';
import { styles } from '../styles/home.styles';

export default function Home() {
  const MemoizedCardProduct = React.memo(CardProduct);
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const navigation: any = useNavigation();
  const [products, setProducts] = useState<any>([]);
  const [productsFilter, setProductsFilter] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>('');

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
      setProductsFilter(_products.data);

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
    const stylesCard = getStylesCard(index, productsFilter.length);
    return (
      <MemoizedCardProduct item={item} stylesCard={stylesCard}/>
    )
  }, [products, productsFilter]);

  // Redirecciona a la vista de creacion de producto
  const createProduct = useCallback(() => {
    navigation.navigate({name: 'Forms', params: {type: 'create'}});
  }, [navigation]);

  // Filtra los productos
  const filterAction = useCallback((event: any) => {
    setProductsFilter(event);
  }, []);

  return (
    <MainLayout>
      <View style={styles.layoutHome}>
        {
          <SearchApp
          dataByFilter={products}
          onPress={(event: any) => filterAction(event)}
          searchText={searchText}
          setSearchText={setSearchText}/>
        }
 
          {
            isProgress ? (
              <View style={styles.layoutHome}>
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
                      style={[colors.borderVariant, {paddingTop: 30}]}
                      data={productsFilter}
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
          <View style={{paddingVertical: 10}}>
            <ButtonPrimary onPress={() => createProduct()} title={'Agregar'} status={'enabled'} typeButton={'primary'}/>
          </View>
      </View>
    </MainLayout>
  )
}