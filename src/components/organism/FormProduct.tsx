import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import InputField from '../molecules/InputField';
import {ProductType} from '../../types/types';
import {useTheme} from '../../context/ThemeContext';
import useFormValidation from '../../hooks/ValidateForm';
import { add, format, parse } from 'date-fns';
import { ProductFormOrganismProps } from '../../types/interfaces';


const ProductFormOrganism: React.FC<ProductFormOrganismProps> = ({ dataForm, setFormData, submited }) => {

  // Validación de formulario - Hook personalizado
  const { errors, validateForm, resetValidation } = useFormValidation(dataForm);

  useEffect(() => {
    if (submited) {
      validateForm();
    } else {
      resetValidation();
    }
  }, [dataForm, submited]);

  const handleChange = useCallback((field: string, value: any) => {
    let _value = value;
    // Si es el campo de fecha le da formato al valor
    if (field === 'date_release') {
      // Se suma un año a la fecha de liberación para obtener la fecha de revisión
      const date_revision = format(add(value, { years: 1 }), "yyyy-MM-dd'T'HH:mm:ss");
      const parsedDate = format(_value, "yyyy-MM-dd'T'HH:mm:ss");
      setFormData((prev: ProductType) => ({ ...prev, [field]: parsedDate, date_revision }));
    } else {
      setFormData((prev: ProductType) => ({ ...prev, [field]: _value }));
    }
  }, [setFormData]);

  return (
    <View style={styles.form}>
      <InputField
        label="ID"
        placeholder="ID del producto"
        value={dataForm?.id}
        onChangeText={(text: string) => handleChange('id', text)}
        error={errors.id}
        maxLength={10}
        keyboardType='numeric'
      />
      <InputField
        label="Product Name"
        placeholder="Nombre del producto"
        value={dataForm?.name}
        onChangeText={(text: string) => handleChange('name', text)}
        error={errors.name}
        maxLength={100}
      />
      <InputField
        label="Description"
        placeholder="Descripción"
        value={dataForm?.description}
        onChangeText={(text: string) => handleChange('description', text)}
        error={errors.description}
        maxLength={200}
      />
      <InputField
        label="Logo"
        placeholder="Logo"
        value={dataForm?.logo}
        onChangeText={(text: string) => handleChange('logo', text)}
        error={errors.logo}
        maxLength={100}
      />
      <InputField
        label="Fecha Liberación"
        placeholder="Fecha liberación"
        value={dataForm?.date_release}
        onChangeText={(text: string) => handleChange('date_release', text)}
        error={errors.date_release}
        maxLength={100}
        disabled={true}
        datePicker={{
          show: false,
          mode: 'date',
          minDate: new Date(),
          disabled:false
        }}
      />
      <InputField
        label="Date Revision"
        placeholder="Fecha revisión"
        value={dataForm?.date_revision}
        onChangeText={(text: string) => handleChange('date_revision', text)}
        error={errors.date_revision}
        maxLength={100}
        disabled={true}
        datePicker={{
          show: false,
          mode: 'date',
          minDate: new Date(),
          disabled:true
        }}
      />
    </View>
  );
}

export default React.memo(ProductFormOrganism);

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
});
