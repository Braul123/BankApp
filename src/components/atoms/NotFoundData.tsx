import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import SvgComponent from '../../assets/images/notFound';

interface PropsNotFoundData {
  width: number;
  heigth: number;
  textBottom: string;
}

const NotFoundData: React.FC<PropsNotFoundData> = ({
  width,
  heigth,
  textBottom,
}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.contentLayout}>
      <SvgComponent width={width} height={heigth}/>
      <Text style={[styles.textData, colors.colorText]}>
        {textBottom || 'No hay datos para mostrar'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-start',
    paddingTop: 50,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  textData: {
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default React.memo(NotFoundData);
