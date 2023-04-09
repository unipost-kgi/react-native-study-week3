import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import NotificationScreen from './NotificationScreen';
import SearchScreen from './SearchScreen';

const BottomTab = createMaterialBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
            tabBarColor: 'blue',
            tabBarBadge: 'new',
            tabBarTestID: 'HomeTab',
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: '검색',
            tabBarIcon: ({ color }) => <Icon name="search" color={color} size={24} />,
            tabBarColor: 'green',
            tabBarTestID: 'SearchTab',
          }}
        />
        <BottomTab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: '알림',
            tabBarIcon: ({ color }) => <Icon name="notifications" color={color} size={24} />,
            tabBarColor: 'black',
            tabBarBadge: '50',
            tabBarTestID: 'NotificationTab',
          }}
        />
        <BottomTab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarLabel: '메세지',
            tabBarIcon: ({ color }) => <Icon name="message" color={color} size={24} />,
            tabBarColor: 'gray',
            tabBarBadge: true,
            tabBarTestID: 'MessageTab',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
