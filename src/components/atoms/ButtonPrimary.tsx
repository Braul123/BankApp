import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import IconApp from '../../assets/icons/AllCustomIcons';
import {useTheme} from '../../context/ThemeContext';
import {colorsMain} from '../../utils/colors';
import { PropsButtonPrimary } from '../../types/interfaces';

const ButtonPrimary: React.FC<PropsButtonPrimary> = ({
  onPress,
  title,
  status,
  typeButton,
  style,
  textStyles,
  icon,
}) => {
  const {colors, isDarkMode} = useTheme();

  const buttonStyle = [
    styles.button,
    typeButton === 'primary'
      ? colors.backgroundButtonPrimary
      : colors.backgroundButtonSecondary,
    style,
  ];

  const textStyle = [
    styles.textButton,
    { color: isDarkMode && typeButton === "secondary" ? colors.colorText.color : colorsMain.system.backgroundColorTextSecondary },
    textStyles,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={buttonStyle}
      onPress={status == 'enabled' ? onPress : null}>
      <View
        style={styles.viewContent}>
        {icon && icon.position === 'left' && (
          <IconApp
            name={icon.name}
            directoryName={icon.directory}
            size={icon.size}
            color={icon.color}
          />
        )}
        <Text
          style={textStyle}>
          {title}
        </Text>
        {icon && icon.position === 'right' && (
          <IconApp
            name={icon.name}
            directoryName={icon.directory}
            size={icon.size}
            color={icon.color}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ButtonPrimary);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
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
