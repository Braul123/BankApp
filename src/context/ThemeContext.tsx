import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
  } from 'react';
  import {useColorScheme} from 'react-native';
import { useColors } from '../utils/colors';
import { ThemeContextType } from '../types/interfaces';

  
  // Crea el contexto
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  
  export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [colors, setColors] = useState<any>(false);
  
    // Usar useEffect para establecer el tema inicial y obtener los colores
    useEffect(() => {
      setIsDarkMode(colorScheme === 'dark');
      const colors = useColors(colorScheme === 'dark');
      setColors(colors);
    }, []);
  
    // Función para cambiar el tema
    const toggleTheme = () => {
      setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      const colors = useColors(newMode);
      setColors(colors);
      return newMode;
      });
    };
  
    return (
      <ThemeContext.Provider value={{isDarkMode, colors, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('No se puede usar el contexto sin un proveedor');
    }
    return context;
  };