import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WatchListView from '../pages/WatchList/View';
import StackRoutesHome from './StackRoutesHome';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const Theme = useTheme();

  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Theme.colors.secundary,
        tabBarInactiveTintColor: Theme.colors.commet,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: RFValue(4),
        },
        tabBarStyle: {
          height: RFValue(52),
          paddingTop: 2,
          backgroundColor: Theme.colors.primary,
          borderTopWidth: 1,
          borderTopColor: Theme.colors.secundary,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={StackRoutesHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={WatchListView}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListView}
        options={{
          tabBarLabel: 'WatchList',
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons
                name="md-bookmark-outline"
                size={size * 0.9}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
