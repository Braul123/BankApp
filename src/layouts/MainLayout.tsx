import {useTheme} from '../context/ThemeContext';
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {colors, isDarkMode} = useTheme();

  return (
    <View style={[styles.container, colors.backgroundStyle]}>
      <StatusBar
        hidden={false}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors?.backgroundStyle?.backgroundColor}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default MainLayout;
