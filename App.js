import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { DefaultTheme } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ProgramsScreen from './src/screens/ProgramsScreen';
import DonateScreen from './src/screens/DonateScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2f4f2f',
    background: '#f9f5ef',
    card: '#f9f5ef',
    text: '#243423',
    border: '#d6cfc0',
    notification: '#2f4f2f',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#f9f5ef' },
          headerTitleStyle: { color: '#2f4f2f', fontWeight: '700' },
          tabBarActiveTintColor: '#2f4f2f',
          tabBarInactiveTintColor: '#777',
          tabBarStyle: { backgroundColor: '#f9f5ef' },
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'About') iconName = 'information-circle';
            else if (route.name === 'Programs') iconName = 'leaf';
            else if (route.name === 'Donate') iconName = 'heart';
            else if (route.name === 'Contact') iconName = 'mail';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Programs" component={ProgramsScreen} />
        <Tab.Screen name="Donate" component={DonateScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


