import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Login, Cadastro }  from './src/pages/'
const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer initialRouteName='Home' headerMode='screen' theme={DarkTheme}>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={ Home } options={{ title: 'Home' }} />
                <Stack.Screen name='Login' component={ Login } options={{ title: 'Login' }} />
                <Stack.Screen name='Cadastro' component={ Cadastro } options={{ title: 'Cadastro' }} />
            </Stack.Navigator>  
        </NavigationContainer>
  );
}