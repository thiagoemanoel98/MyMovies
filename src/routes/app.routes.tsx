import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import HomeView from '../pages/Home/View';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WatchListView from '../pages/WatchList/View';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const Theme = useTheme();

  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#F5F8FA',
        tabBarInactiveTintColor: '#471405',
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: RFValue(4),
        },
        // 62
        tabBarStyle: {
          height: RFValue(48),
          paddingTop: 2,
          backgroundColor: Theme.colors.primary,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons
                name="ios-newspaper-sharp"
                size={size * 0.9}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeView}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons
                name="ios-newspaper-sharp"
                size={size * 0.9}
                color={color}
              />
            );
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
                name="ios-newspaper-sharp"
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
