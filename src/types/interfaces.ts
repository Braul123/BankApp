/**
 * @fileoverview Interfaces for the app
 */

import { colorsType, DirectoryIconName } from "./types";


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