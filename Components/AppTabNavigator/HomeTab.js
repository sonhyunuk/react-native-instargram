import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from '../CardComponent';
import { Container, Content, Icon } from 'native-base';

export default function HomeTab() {
    return (
        <Container style={styles.container}>
            <Content>
                <CardComponent />
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})