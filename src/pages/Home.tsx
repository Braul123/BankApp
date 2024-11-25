import { View, FlatList, RefreshControl, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { fetchGetProducts } from '../services/api/productService'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';
import CardProduct from '../components/atoms/CardProduct';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import SkeletonListProduct from '../components/molecules/SkeletonListProduct';
import { getStylesCard } from '../services/utils/styleUtils';
import NotFoundData from '../components/atoms/NotFoundData';
import SearchApp from '../components/molecules/SearchApp';
import { styles } from '../styles/home.styles';
import { useProduct } from '../context/ProductContext';

export default function Home() {
  const MemoizedCardProduct = React.memo(CardProduct);
  const { colors } = useTheme();
  const {deleteProduct} = useProduct();
  const [refreshing, setRefreshing] = useState(false);
  const navigation: any = useNavigation();
  const [products, setProducts] = useState<any>([]);
  const [productsFilter, setProductsFilter] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>('');

  const [isProgress, setIsProgress] = useState(true);

  // Usa el hook useFocusEffect para obtener los productos en cuanto ingresa a la vista
  useFocusEffect(
    useCallback(() => {
      getProducts();
      deleteProduct();
    }, [])
  );

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
    } catch (error) {
      setTimeout(() => {
        setIsProgress(false);
        setRefreshing(false);
        setTimeout(() => {
          Alert.alert('Error', 'Ocurrió un error obteniendo los productos');
        }, 200);
      }, 500);
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
    navigation.navigate('FormProduct', {isEdit: false});
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
              <View style={styles.layoutHome} testID='skeleton-list-product'>
                <SkeletonListProduct numberOfSkeletons={5}/>
              </View>
            ): (
              <>
                {
                  products.length === 0 ? (
                    <View style={{flex:1, alignItems: "center"}}>
                      <NotFoundData
                      width={140}
                      heigth={200}
                      textBottom={'Opps! No se encontró nada aquí, crea tu primer producto desde el botón Agregar.'}/>
                      {/* Reintenta la petición */}
                      <ButtonPrimary
                      onPress={() => {setIsProgress(true); getProducts()}}
                      title={'Refrescar'}
                      status={'enabled'}
                      typeButton={"secondary"}
                      style={{width: 200, height: 50}}
                      />

                    </View>
                  ) : (
                    productsFilter.length === 0 ? (
                      <View style={{flex:1}}>
                        <NotFoundData
                           width={140}
                           heigth={200}
                          textBottom={'No se econtraron resultados para tu búsqueda'}/>
                      </View>
                    ) : (
                      <FlatList
                        testID='flat-list-products'
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
                  )
                }
              </>
            )
          }
          <View style={{paddingVertical: 10}} testID='button-add-product'>
            <ButtonPrimary
            onPress={() => createProduct()} title={'Agregar'} status={'enabled'} typeButton={'primary'}/>
          </View>
      </View>
    </MainLayout>
  )
}