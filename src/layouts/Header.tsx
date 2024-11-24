import {useTheme} from '../context/ThemeContext';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconApp from '../assets/icons/AllCustomIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuth} from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const {colors, toggleTheme, isDarkMode} = useTheme();
  const navigation: any = useNavigation();
  const {isAuthenticated, logout} = useAuth();

  const logoutApp = () => {
    navigation.navigate('Welcome');
    logout();
  }

  return (
    <View style={[styles.header, colors.backgroundStyle]}>
      <Text style={[styles.logo, colors.colorTextLogo]}>Bank App</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.touchAction}
          onPress={toggleTheme}>
          {isDarkMode ? (
            <IconApp name={'sun'} size={25} directoryName={'Feather'} />
          ) : (
            <IconApp name={'moon-o'} size={25} directoryName={'FontAwesome'} />
          )}
        </TouchableOpacity>
        {isAuthenticated && (
          <TouchableOpacity activeOpacity={0.2} style={styles.touchAction} onPress={() => logoutApp()}>
            <IconApp
              name={'logout'}
              size={25}
              directoryName={'MaterialIcons'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  touchAction: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
