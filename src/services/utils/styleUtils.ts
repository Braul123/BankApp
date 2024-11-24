
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
      let styles = {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomStartRadius: length === 1 ? 10 : 0,
        borderBottomEndRadius: length === 1 ? 10 : 0,
        borderTopWidth: 1,
      };
      return styles;
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