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
  verificationID,
} from '../services/api/productService';
import useFormValidation from '../hooks/ValidateForm';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../context/ThemeContext';
import TitlePages from '../components/atoms/TitlePages';

export default function Forms() {
  const [submited, setSubmited] = useState(false);
  const navigation: any = useNavigation();
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

  const [formData, setFormData] = useState<ProductType>(initialFormData);

  const {colors} = useTheme();
  const {validateForm} = useFormValidation(formData);

  // Envía el formulario
  const onSubmit = useCallback(() => {
    setSubmited(true);
    // Si el formulario es válido, guarda los datos
    if (validateForm()) {
      validateID();
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
            text: 'Seguir creando',
          },
          {
            text: 'Ir a la lista',
            onPress: () => {
              goBack();
            },
          },
        ],
      );
      resetForm();
    } catch (error) {
      console.error('Error al guardar los datos', error);
    }
  }, [formData, goBack]);

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
          <TitlePages title={'Formulario de registro'} />

          {/* Formulario */}
          <View style={{flex: 1}}>
            <ProductFormOrganism
              dataForm={formData}
              setFormData={setFormData}
              submited={submited}
            />
          </View>
        </ScrollView>

        {/* Botones de envío y reinicio */}
        <View style={styles.contentButtonForm}>
          <ButtonPrimary
            onPress={onSubmit}
            title={'Enviar'}
            status={'enabled'}
            typeButton={'primary'}
            style={{height: 50}}
          />
          <ButtonPrimary
            onPress={resetForm}
            title={'Reiniciar'}
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
