import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();
export default class MainScreen extends Component {
    static navigationOption ={
        header :null
    }
    render() {
        return (
            <Tab.Navigator tabBarPosition={'bottom'} tabBarOptions={{
                showIcon: true, showLabel: false, activeTintColor: '#000', inactiveTintColor: '#d1cece',
                upperCaseLabel: false
            }}>
                <Tab.Screen name="HomeTab" component={HomeTab}
                    options={{ tabBarIcon: ({ color, size }) => (<AntDesign name="home" color={color} size={20} />) }} />
                <Tab.Screen name="SearchTab" component={SearchTab}
                    options={{ tabBarIcon: ({ color, size }) => (<AntDesign name="search1" color={color} size={20} />) }} />
                <Tab.Screen name="AddMediaTab" component={AddMediaTab}
                    options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="add-circle-outline" color={color} size={20} />) }} />
                <Tab.Screen name="LikesTab" component={LikesTab}
                    options={{ tabBarIcon: ({ color, size }) => (<AntDesign name="heart" color={color} size={20} />) }} />
                <Tab.Screen name="ProfileTab" component={ProfileTab}
                    options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="human" color={color} size={20} />) }} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
