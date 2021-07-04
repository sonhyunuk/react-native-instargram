import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, Image, HStack } from 'native-base';

export default class CardComponent extends Component {
    render() {
        return (
            <Box>
                <Box >
                    <HStack>
                        <Image left={15} source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} size={50} alt="image" />
                        <Box left={15}>
                            <Text>Anpigon</Text>
                            <Text >Jan 21, 2021</Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        )
    }
}
