import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import ProductFormOrganism from '../components/organism/FormProduct';
import {ProductType} from '../types/types';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import {colorsMain} from '../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {
  fetchCreateProduct,
  fetchUpdateProduct,
  verificationID,
} from '../services/api/productService';
import useFormValidation from '../hooks/ValidateForm';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from '../context/ThemeContext';
import TitlePages from '../components/atoms/TitlePages';
import { useProduct } from '../context/ProductContext';

export default function FormProduct() {
  const initialFormData = useMemo(
    () => ({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }),
    [],
  );
  const [submited, setSubmited] = useState(false);
  const navigation: any = useNavigation();
  const router: any = useRoute();
  const [formData, setFormData] = useState<ProductType>(initialFormData);
  const [isEdit, setIsEdit] = useState(false);
  // Context 
  const {product, saveProduct} = useProduct();
  const {validateForm} = useFormValidation(formData);

  // Si se recibe un producto, se asigna a los datos del formulario
  useMemo(() => {
    if (router.params && router.params?.isEdit && product) {
      setFormData(product);
      setIsEdit(true);
    }
  }, [router.params, product]);

  // Envía el formulario
  const onSubmit = useCallback(() => {
    setSubmited(true);
    // Si el formulario es válido, guarda los datos
    if (validateForm()) {
      // Si no esta editando un producto se valida el ID y se guarda
      if (!isEdit) {
        validateID();
      } else {
        updateProduct();
      }
    }
  }, [validateForm, formData]);

  // Prepara los datos para ser guardados
  const validateID = useCallback(async () => {
    try {
      const verifyID = await verificationID(formData.id);
      // Si el id no esta registrado, guarda los datos
      if (!verifyID) {
        saveData();
      } else {
        Alert.alert('ID ya registrado', 'El ID del producto ya existe');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error de verificación, vuelve a intentarlo más tarde');
      console.error('Error al preparar los datos', error);
    }
  }, [formData]);

  // Navega a la lista de productos
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Guarda los datos
  const saveData = useCallback(async () => {
    try {
      await fetchCreateProduct(formData);
      Alert.alert(
        'Datos guardados',
        'Los datos se han guardado correctamente',
        [
          {
            text: 'Aceptar',
            onPress: () => {
              goBack();
            },
          },
        ],
      );
      resetForm();
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al guardar los datos, vuelve a intentarlo más tarde');
      console.error('Error al guardar los datos', error);
    }
  }, [formData]);

  // Actualiza los datos del producto
  const updateProduct = useCallback(async () => {
    try {
      await fetchUpdateProduct(formData);
      saveProduct(formData)
      Alert.alert(
        'Datos actualizados',
        'Los datos se han actualizado correctamente',
        [
          {
            text: 'Ok',
            onPress: () => {
              goBack();
            },
          },
        ],
      );
      // resetForm();
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error actualizando los datos, vuelve a intentarlo más tarde');
    }
  }, [formData]);

  // Reinicia el formulario
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setSubmited(false);
  }, [initialFormData]);

  return (
    <MainLayout>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {/* Título */}
          <TitlePages title={!isEdit ? 'Formulario de registro' : 'Edita tu producto'} />

          {/* Formulario */}
          <View style={{flex: 1}}>
            <ProductFormOrganism
              dataForm={formData}
              setFormData={setFormData}
              submited={submited}
              isEdit={isEdit}
            />
          </View>
        </ScrollView>

        {/* Botones de envío y reinicio */}
        <View style={styles.contentButtonForm}>
          <ButtonPrimary
            onPress={onSubmit}
            title={!isEdit ? 'Enviar' : 'Guardar'}
            status={'enabled'}
            typeButton={'primary'}
            style={{height: 50}}
          />
          <ButtonPrimary
            onPress={!isEdit ? resetForm : goBack}
            title={!isEdit ? 'Reiniciar' : 'Cancelar'}
            status={'enabled'}
            typeButton={'secondary'}
            style={{
              marginTop: 10,
              height: 50,
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  contentButtonForm: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  titleContent: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
