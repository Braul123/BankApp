import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import IconApp from '../../assets/icons/AllCustomIcons';
import {IconTypeRequire} from '../../types/types';
import {useTheme} from '../../context/ThemeContext';
import {colorsMain} from '../../utils/colors';

interface props {
  onPress: any;
  title: string;
  status: 'enabled' | 'disabled';
  typeButton: 'primary' | 'secondary';
  style?: any;
  textStyles?: any;
  icon?: IconTypeRequire;
}

export default function ButtonPrimary(data: props) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        data.typeButton == 'primary'
          ? colors.backgroundButtonPrimary
          : colors.backgroundButtonSecondary,
        {...data.style},
      ]}
      onPress={data.status == 'enabled' ? data.onPress : null}>
      <View
        style={styles.viewContent}>
        {data.icon && data.icon.position === 'left' && (
          <IconApp
            name={data.icon.name}
            directoryName={data.icon.directory}
            size={data.icon.size}
            color={data.icon.color}
          />
        )}
        <Text
          style={[
            styles.textButton,
            {
              color: colorsMain.system.backgroundColorTextSecondary,
              ...data.textStyles,
            },
          ]}>
          {data.title}
        </Text>
        {data.icon && data.icon.position === 'right' && (
          <IconApp
            name={data.icon.name}
            directoryName={data.icon.directory}
            size={data.icon.size}
            color={data.icon.color}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  viewContent: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
