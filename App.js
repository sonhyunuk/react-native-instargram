import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Components/MainScreen.js';
import { AntDesign, Feather } from '@expo/vector-icons';
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Hoe" component={MainScreen} options={{headerShown : false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
