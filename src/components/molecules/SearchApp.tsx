import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputAtom from '../atoms/Input';
import { SearchProps } from '../../types/interfaces';

const SearchApp: React.FC<SearchProps> = ({dataByFilter, onPress, searchText, setSearchText}) => {

  // Función para filtrar los datos
  const search = useCallback(
    (text: string) => {
      setSearchText(text);
      const filteredData = dataByFilter.filter(
        (item: any) =>
          item.id.toString().includes(text) ||
          item.name.toLowerCase().includes(text.toLowerCase()),
      );
      // Devolver los datos filtrados
      onPress(filteredData);
    },
    [dataByFilter, onPress],
  );

  return (
    <View style={{width: '100%'}}>
      <InputAtom
        placeholder="Buscar..."
        value={searchText}
        onChangeText={(text: string) => search(text)}
        keyboardType="web-search"
        maxLength={50}
        disabled={false}
        error={''}
      />
    </View>
  );
};

export default React.memo(SearchApp);
