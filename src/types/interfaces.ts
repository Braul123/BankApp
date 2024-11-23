/**
 * @fileoverview Interfaces for the app
 */

import { colorsType } from "./types";


export interface ThemeContextType {
    isDarkMode: boolean;
    colors: colorsType;
    toggleTheme: () => void;
  }