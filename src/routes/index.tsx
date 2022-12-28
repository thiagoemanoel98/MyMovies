import * as React from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './app.routes';

export function Routes() {
  const theme = useTheme();

  return (
    <>
      <SafeAreaView style={{backgroundColor: theme.colors.primary}} />
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={'light-content'}
        translucent={false}
      />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <SafeAreaView style={{backgroundColor: theme.colors.primary}} />
    </>
  );
}
