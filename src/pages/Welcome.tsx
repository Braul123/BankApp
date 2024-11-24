import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';
import MainLayout from '../layouts/MainLayout';
import {styles} from '../styles/welcome.styles';
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import { colorsMain } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

export default function Welcome() {
  const {colors} = useTheme();
  const {login} = useAuth();
  const navigation: any = useNavigation();


  const initApp = () => {
    navigation.navigate('Home');
    login();
  }

  return (
    <MainLayout>
      <View style={styles.content}>

        <View>
          <Image source={require('../assets/images/logo.png')} style={{width: 150, height: 150, borderRadius: 100}}/>
        </View>

        <View style={styles.info}>
          <Text style={[colors.colorText, styles.title]}>Hola, bienvenido a Bank App </Text>
          <Text style={[colors.colorText, styles.subtitle]}>¡Transforma la manera en que gestionas tu dinero y alcanza tus metas financieras con facilidad!</Text>
        </View>

        <View style={{width: '100%'}}>
          <ButtonPrimary
            onPress={() => initApp()}
            title={'Ingresar'}
            status={"enabled"}
            typeButton="primary"
            icon={{name: 'arrow-right', directory: 'Feather', size: 20, position: "right", color: colorsMain.system.backgroundColorTextSecondary}}
          />
        </View>
      </View>
    </MainLayout>
  );
}
