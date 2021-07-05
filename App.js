import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Components/MainScreen.js';
import { AntDesign, Feather } from '@expo/vector-icons';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Hoe" component={MainScreen} options={{
          headerLeft: () =>
            (<Feather name="send" size={30} color="black" style={{ paddingLeft: 10 }} />),
          title: 'Instargram',
          headerRight: () =>
            (<AntDesign name="camera" size={30} color="black" style={{ paddingRight: 10 }} />),
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
