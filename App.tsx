import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>App</Text>
      </View>
    </ThemeProvider>
  );
}
