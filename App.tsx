import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Routes from './src/routes/Routes';
import {ThemeProvider} from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
