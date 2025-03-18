import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/components/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView covers the full screen
  },
});
