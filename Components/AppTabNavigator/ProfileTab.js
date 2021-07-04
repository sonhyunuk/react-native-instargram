import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ProfileTab = () => {
    return (
        <View style={styles.container}>
            <Text>ProfileTab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default ProfileTab;