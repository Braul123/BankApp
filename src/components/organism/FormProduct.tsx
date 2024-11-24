import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import InputField from '../molecules/InputField';
import {ProductType} from '../../types/types';
import {useTheme} from '../../context/ThemeContext';

interface ProductFormOrganismProps {
  dataForm: ProductType;
  setFormData: any;
  submited: boolean;
}

export default function ProductFormOrganism(data: ProductFormOrganismProps) {
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    validateForm();
  }, [data.dataForm, data.submited]);

  const handleChange = (field: any, value: any) => {
    data.setFormData((prev: ProductType) => ({...prev, [field]: value}));
  };

  const validateForm = () => {
    // Si el estado de envío es falso, no se valida
    if (!data.submited) {
      setErrors({});
      return;
    }
    const newErrors: any = {};

    // Validación de ID mayor a 5 caracteres
    if (data.dataForm.id.length >= 0 && data.dataForm.id.length < 3) {
      newErrors.id = "El ID debe tener al menos 3 caracteres";
    }
    // Validación de nombre mayor a 5 caracteres
    if (data.dataForm.name.length >= 0 && data.dataForm.name.length < 5) {
      newErrors.name = "El nombre debe tener al menos 5 caracteres";
    }
    // Validación de descripción mayor a 10 caracteres
    if (data.dataForm.description.length >= 0 && data.dataForm.description.length < 10) {
      newErrors.description = "La descripción debe tener al menos 10 caracteres";
    }
    // Vlidación de logo
    if (data.dataForm.logo.length == 0) {
      newErrors.logo = "El logo es requerido";
    }
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <View style={styles.form}>
      <InputField
        label="ID"
        placeholder="ID del producto"
        value={data.dataForm?.id}
        onChangeText={(text: string) => handleChange('id', text)}
        error={errors.id}
        maxLength={10}
        keyboardType='numeric'
      />
      <InputField
        label="Product Name"
        placeholder="Nombre del producto"
        value={data.dataForm?.name}
        onChangeText={(text: string) => handleChange('name', text)}
        error={errors.name}
        maxLength={100}
      />
      <InputField
        label="Description"
        placeholder="Descripción"
        value={data.dataForm?.description}
        onChangeText={(text: string) => handleChange('description', text)}
        error={errors.description}
        maxLength={200}
      />
      <InputField
        label="Logo"
        placeholder="Logo"
        value={data.dataForm?.logo}
        onChangeText={(text: string) => handleChange('logo', text)}
        error={errors.logo}
        maxLength={100}
      />
      <InputField
        label="Fecha Liberación"
        placeholder="Fecha liberación"
        value={data.dataForm?.date_release}
        onChangeText={(text: string) => handleChange('date_release', text)}
        error={errors.date_release}
        maxLength={100}
      />
      <InputField
        label="Date Revision"
        placeholder="Fecha revisión"
        value={data.dataForm?.date_revision}
        onChangeText={(text: string) => handleChange('date_revision', text)}
        error={errors.date_revision}
        maxLength={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
});
