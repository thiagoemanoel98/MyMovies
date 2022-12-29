import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './app.routes';
import {useTheme} from 'styled-components';

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
