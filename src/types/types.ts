/**
 * @fileoverview: Types for the app
 */

export type colorsType = {
    colorText: any;
    backgroundStyle: any;
    colorTextLogo: any;
    backgroundButtonPrimary: any;
    backgroundButtonSecondary: any;
    borderVariant: any;
}

/**
 * @description Tipo de directorio de iconos almacenados en @info https://oblador.github.io/react-native-vector-icons/
 */
export type DirectoryIconName = 'AntDesign' |
    'Feather' |
    'FontAwesome' |
    'FontAwesome6' |
    'Fontisto' |
    'MaterialCommunityIcons' |
    'Octicons' |
    'SimpleLineIcons' |
    'MaterialIcons' |
    'FontAwesome5' | 
    'Ionicons';

/**
 * @description Parametros que se deben exigir para un icono dinamico
 */
export type IconTypeRequire = {
    name: string
    directory: DirectoryIconName,
    size: number,
    position : 'left' | 'right',
    color: string
}

/**
 * @description Tipo de los parametros que se deben exigir para producto
 */
export type ProductType = {
    id: string,
    name: string,
    description: string,
    logo: string,
    date_release: string,
    date_revision: string
}