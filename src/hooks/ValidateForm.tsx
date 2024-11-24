import {useState} from 'react';
import {ProductType} from '../types/types';

const useFormValidation = (data: ProductType) => {
  const [errors, setErrors] = useState<any>({});

  // Validación de formulario
  const validateForm = () => {
    const newErrors: any = {};

    // Validación de ID mayor a 5 caracteres
    if (data.id.length >= 0 && data.id.length < 3) {
      newErrors.id = 'El ID debe tener al menos 3 caracteres';
    }
    // Validación de nombre mayor a 5 caracteres
    if (data.name.length >= 0 && data.name.length < 5) {
      newErrors.name = 'El nombre debe tener al menos 5 caracteres';
    }
    // Validación de descripción mayor a 10 caracteres
    if (data.description.length >= 0 && data.description.length < 10) {
      newErrors.description =
        'La descripción debe tener al menos 10 caracteres';
    }
    // Validación de logo
    if (data.logo.length == 0) {
      newErrors.logo = 'El logo es requerido';
    }
    // Validación de fecha de liberación
    if (data.date_release.length == 0) {
      newErrors.date_release = 'La fecha de liberación es requerida';
    }
    // Validación de fecha de revisión
    if (data.date_revision.length == 0) {
      newErrors.date_revision = 'La fecha de revisión es requerida';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Reinicia la validación
  const resetValidation = () => {
    setErrors({});
  };

  return {errors, validateForm, resetValidation};
};

export default useFormValidation;
