
/**
 * @fileoverview Interfaces for the app
 */

import { KeyboardTypeOptions } from "react-native";
import { colorsType, DirectoryIconName, IconTypeRequire, ProductType, TypeDatePickerInput } from "./types";


export interface ThemeContextType {
    isDarkMode: boolean;
    colors: colorsType;
    toggleTheme: () => void;
}

/**
 * @description Propiedades para iconos generales de la app 
 */
export interface PropsDirectoryIcons {
  name: string;
  size: number;
  directoryName: DirectoryIconName
  props?: any
  color?: string
}

/**
 * @description Propiedades para botones de la app
 */
export interface PropsButtonPrimary {
  onPress: any;
  title: string;
  status: 'enabled' | 'disabled';
  typeButton: 'primary' | 'secondary';
  style?: any;
  textStyles?: any;
  icon?: IconTypeRequire;
}

/**
 * @description Propiedades para el componente CardProduct
 */
export interface CardProductProps {
  item: ProductType;
  stylesCard?: any;
}

/**
 * @description Propiedades para el componente DatePicker
 */

export interface DatePickerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  date: any;
  onChangeText: (date: any) => void;
  minimumDate: Date;
}

/**
 * @description Propiedades para el componente ErrorInput
 */
export interface AtomPropsText {
  text: string;
  style?: any;
}

/**
 * @description Propiedades para el componente InputAtom
 */
export interface InputAtomProps {
  placeholder: string;
  value: string;
  onChangeText: (text: any) => void;
  keyboardType?: KeyboardTypeOptions;
  error: string;
  maxLength: number;
  datePicker?: TypeDatePickerInput,
  disabled: boolean;
}

/**
 * @description Propiedades para el componente InputField
 */
export interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  error: any;
  maxLength: number;
  datePicker?: TypeDatePickerInput;
  disabled?: boolean;
}

/**
 * @description Propiedades para el organismo FormProduct
 */
export interface ProductFormOrganismProps {
  dataForm: ProductType;
  setFormData: any;
  submited: boolean;
  isEdit: boolean;
}

/**
 * @description Propiedades para el componente SearchApp
 */
export interface SearchProps {
  dataByFilter: any[];
  searchText: string;
  setSearchText: (text: string) => void;
  onPress: (filteredData: any[]) => void;
}

/**
 * @description Propiedades para AuthContext
 */
export interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

/**
 * @description Propiedades para productContext
 */
export interface ProductContextProps {
  product: ProductType | undefined;
  saveProduct: (product: ProductType) => void;
  deleteProduct: () => void;
}

/**
 * @description Propiedades para el componente PropsNotFoundData
 */
export interface PropsNotFoundData {
  width: number;
  heigth: number;
  textBottom: string;
}

/**
 * @description Propiedades para el componente TitlePages
 */
export interface TitlePagesProps {
  title?: string;
  subtitle?: string;
}

/**
 * @description Propiedades para el componente ProductDetailSection
 */
export interface ProductDetailSectionProps {
  label: string;
  value: string;
}