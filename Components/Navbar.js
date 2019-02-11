import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NavBar extends React.Component {
    render() {
        return (
            <View style={styles.navBar}>
            
                <Text style={styles.txt}> QUIZ GAME </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'red',
        height: 40,
        alignItems:'center',
        justifyContent: 'space-around'
    },
    txt: {
        color: 'white',
        fontSize: 30
    }
})