/**
 * @description Este archivo se encarga de distribuir a toda la aplicacion los iconos del directorio de iconos de react native
 */

import {Text, useColorScheme} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colorsMain} from '../../utils/colors';
import { PropsDirectoryIcons } from '../../types/interfaces';
import { useTheme } from '../../context/ThemeContext';

const IconsAllByTypes = {
  'AntDesign':AntDesign, 
  'Feather':Feather, 
  'FontAwesome':FontAwesome, 
  'FontAwesome6':FontAwesome6, 
  'Fontisto':Fontisto, 
  'MaterialCommunityIcons':MaterialCommunityIcons, 
  'Octicons':Octicons, 
  'SimpleLineIcons':SimpleLineIcons, 
  'MaterialIcons':MaterialIcons, 
  'FontAwesome5':FontAwesome5, 
  'Ionicons':Ionicons, 
}

/**
 * @function IconApp
 * @param name El nombre del icono
 * @param size El tamaño del icono
 * @param directoryName El nombre del directorio donde esta almacenado el icono @info https://oblador.github.io/react-native-vector-icons/
 * @returns 
 */
export default function IconApp(data: PropsDirectoryIcons) {


  const { colors, isDarkMode } = useTheme();

  const {name, size, directoryName, props, color} = data;

  const Component = IconsAllByTypes[directoryName];

  return (
    <Text style={{alignItems: 'center', justifyContent: 'center'}}>
      <Component 
        name={name}
        size={size}
        color={
          color ? color :
          isDarkMode
            ? colorsMain.system.secondaryColorTextDarkMode
            : colorsMain.system.secondaryColorTextLigthMode
        }
        {...props}
      />
  </Text>
  )
}