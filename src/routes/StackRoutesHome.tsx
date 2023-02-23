import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from '../pages/Home/view';
import MovieDetailsView from '../pages/MovieDetails/view';

const Stack = createNativeStackNavigator();

export default function StackRoutesHome() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsView} />
    </Stack.Navigator>
  );
}
