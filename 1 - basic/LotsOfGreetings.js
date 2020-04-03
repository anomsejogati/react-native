import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})

function Greeting(props) {
    return (
        <View style={styles.center}>
            <Text>Hello {props.name}!</Text>
        </View>
    );
}

function LotsOfGreetings() {
    return (
        <View style={[styles.center, { top: 50 }]}>
            <Greeting name='Anom' />
            <Greeting name='Sejogati' />
        </View>
    );
}

export default LotsOfGreetings;