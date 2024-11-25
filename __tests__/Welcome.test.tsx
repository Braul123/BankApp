import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Welcome from '../src/pages/Welcome';
import {RenderAPI} from '@testing-library/react-native';
import {ThemeProvider} from '../src/context/ThemeContext';
import {AuthProvider} from '../src/context/AuthContext';
import {ProductProvider} from '../src/context/ProductContext';
import {NavigationContainer} from '@react-navigation/native';
import ButtonPrimary from '../src/components/atoms/ButtonPrimary';
import {colorsMain} from '../src/utils/colors';

describe('<Welcome/>', () => {
  let component: RenderAPI;

  const mockNavigation = {navigate: jest.fn()};
  const mockLogin = jest.fn();

  beforeEach(() => {
    component = render(
      <NavigationContainer>
        <ThemeProvider>
          <AuthProvider>
            <ProductProvider>
              <Welcome />
            </ProductProvider>
          </AuthProvider>
        </ThemeProvider>
      </NavigationContainer>,
    );
  });

  it('Elementos que se deben renderizar', () => {
    expect(component).toBeDefined();
    expect(component.getByText('Hola, bienvenido a Bank App')).toBeDefined();
    expect(
      component.getByText(
        '¡Transforma la manera en que gestionas tu dinero y alcanza tus metas financieras con facilidad!',
      ),
    ).toBeDefined();
    expect(component.getByText('Ingresar')).toBeDefined();
  });

  it('Debe llamar a initApp y navegar a Inicio cuando se presiona el botón', () => {
    // Renderiza el componente con mocks
    const {getByText} = render(
      <ThemeProvider>
        <ButtonPrimary
          onPress={() => {
            const initApp = () => {
              mockNavigation.navigate('Home');
              mockLogin();
            };
            initApp();
          }}
          title={'Ingresar'}
          status="enabled"
          typeButton="primary"
          icon={{
            name: 'arrow-right',
            directory: 'Feather',
            size: 20,
            position: 'right',
            color: colorsMain.system.backgroundColorTextSecondary,
          }}
        />
      </ThemeProvider>,
    );

    // Encuentra el botón por el texto
    const button = getByText('Ingresar');
    // Simula el clic en el botón
    fireEvent.press(button);
    // Verifica que se navegue a 'Home'
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
    // Verifica que se haya llamado a `login`
    expect(mockLogin).toHaveBeenCalled();
  });
});
