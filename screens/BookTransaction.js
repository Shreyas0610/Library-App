import { StatusBar } from 'expo-status-bar';
import react from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookTransaction extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Issued Book</Text>
            </View>
        );
    }
}