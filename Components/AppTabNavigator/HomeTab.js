import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon, NativeBaseProvider } from 'native-base';
import CardComponent from '../CardComponent';

export default function HomeTab() {
    return (
        <NativeBaseProvider>
            <Container>
                <CardComponent/>
            </Container>
        </NativeBaseProvider>
    )
}

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
}) */