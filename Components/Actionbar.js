import React from 'react';

import { View,Text,TouchableHighlight,StyleSheet} from 'react-native';
export default class Actionbar extends React.Component {
    render() {
        return (
            <View>
                <View> 
                    <TouchableHighlight style={styles.button} onPress={ this.props.previous}>
                        <Text style={styles.txt}>Previous</Text>
                    </TouchableHighlight> 
                </View>
                <View>
                    <TouchableHighlight style={styles.button} onPress={ this.props.next}>
                        <Text style={styles.txt} > Next </Text>
                    </TouchableHighlight> 
                </View>
                <View>
                    <TouchableHighlight style={styles.button} onPress={this.props.submit2}> 
                        <Text style={styles.txt}> Submit</Text> 
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight style={styles.button} onPress={() => {
                        this.props.navigation.navigate('IndexScreen')
                        this.props.botonReset }}>
                        <Text style={styles.txt}> Back</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        color: 'black'
    },
    button: {
        marginLeft: 30,
        width: 80,
        height: 40,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

      