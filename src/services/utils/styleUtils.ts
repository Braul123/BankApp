
/**
 * @fileoverview Style Utils
 */

/**
 * @description Obtiene los estilos para los bordes de las tarjetas
 * @param index 
 * @param length 
 * @returns 
 */
export const getStylesCard = (index: number, length: number) => {
    if (index === 0) {
      return {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 1,
      };
    } else if (index === length - 1) {
      return {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 0,
      };
    } else {
      return {
        borderTopWidth: 0,
        borderBottomWidth: 1,
      };
    }
  };