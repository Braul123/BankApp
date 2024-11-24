import { View, Text, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { fetchGetProducts } from '../services/api/productService'
import { useTheme } from '../context/ThemeContext';
import { ProductType } from '../types/types';
import CardProduct from '../components/atoms/CardProduct';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false); // Muestra el indicador de progreso del header (deslizar para refrescar)
  const navigation: any = useNavigation();
  const [products, setProducts] = useState(
    [
      {
      "id": "uno",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "assets-1.png",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
      },
      {
      "id": "dps",
      "name": "Nombre producto",
      "description": "Descripción producto",
      "logo": "assets-1.png",
      "date_release": "2025-01-01",
      "date_revision": "2025-01-01"
      }
      ]
  );

  useEffect(() => {
    getProducts();
  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    getProducts();
  }

  // Obtiene los productos
  const getProducts = async () => {
    try {
      const products = await fetchGetProducts();
      setTimeout(() => {
        setRefreshing(false);
      }, 200);
      console.log('PRODUCTOS',products);
    } catch (error) {
      console.log(error);
    }
  }

  // Renderiza cada item del FlatList
  const renderItem = ({ item }: { item: ProductType }) => (
    <CardProduct {...item}/>
  );

  // Redirecciona a la vista de creacion de producto
  const createProduct = () => {
    console.log('Crear producto');
    navigation.navigate({name: 'Forms', params: {type: 'create'}});
  }


  return (
    <MainLayout>
      <View style={{flex: 1}}>
          <View style={{height: 50, width: '100%', marginBottom:16, backgroundColor: 'blue'}}></View>
          <FlatList
            style={[colors.borderVariant]}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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