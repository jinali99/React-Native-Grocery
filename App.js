import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import RootNavigation from './src/components/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './src/state/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <NavigationContainer>
                <RootNavigation />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView covers the full screen
  },
});
