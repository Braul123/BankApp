import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import ProductFormOrganism from '../components/organism/FormProduct';
import {ProductType} from '../types/types';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import {colorsMain} from '../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';

export default function Forms() {
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState<ProductType>({
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  });

  // Envía el formulario
  const onSubmit = () => {
    setSubmited(true);
  };

  // Reinicia el formulario
  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });
    setSubmited(false);
  };

  return (
    <MainLayout>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          >
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
            typeButton={'primary'}
            style={{
              marginTop: 10,
              backgroundColor: colorsMain.brand.backgroundSecondary,
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
});
