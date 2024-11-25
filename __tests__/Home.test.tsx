
  import React from 'react';
  import {render, fireEvent, waitFor} from '@testing-library/react-native';
  import {RenderAPI} from '@testing-library/react-native';
  import {ThemeProvider} from '../src/context/ThemeContext';
  import {AuthProvider} from '../src/context/AuthContext';
  import {ProductProvider} from '../src/context/ProductContext';
  import {NavigationContainer} from '@react-navigation/native';
  import Home from '../src/pages/Home';

  describe('<Home/>', () => {
    let component: RenderAPI;

    const mockNavigation = {navigate: jest.fn()};
    const mockLogin = jest.fn();

    beforeEach(() => {
      component = render(
        <NavigationContainer>
          <ThemeProvider>
            <AuthProvider>
              <ProductProvider>
                <Home />
              </ProductProvider>
            </AuthProvider>
          </ThemeProvider>
        </NavigationContainer>,
      );
    });

  it('Elementos que se deben renderizar en la primera carga', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('button-add-product')).toBeDefined();
  });

  it('Debe llamar a createProduct y navegar al formulario cuando se presiona el botón', () => {
      const button = component.getByText('Agregar');
    fireEvent.press(button);
      expect(mockNavigation.navigate).toHaveBeenCalledWith('FormProduct', {isEdit: false});
    });

    it('Debe mostrar el SkeletonListProduct mientras se cargan los productos', async () => {
      expect(component.getByTestId('skeleton-list-product')).toBeDefined();
      await waitFor(() => expect(component.queryByTestId('skeleton-list-product')).toBeNull());
    });

    it('Debe mostrar el mensaje de error si la petición falla', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject('API is down'));
      await waitFor(() => expect(component.getByText('Error')).toBeDefined());
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });

