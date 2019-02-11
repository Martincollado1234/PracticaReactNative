import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';

export default class Answer extends React.Component {
    render() {
        
        return (
            <View style={styles.caja}>
                <TextInput style={styles.huecoTexto}  value = {this.props.question.userAnswer || ""} onChangeText={(entry) => {
                    this.props.onQuestionAnswer(entry);
                }}
                />
            </View>
        );
    }
}
const styles= StyleSheet.create({
    caja: {
        
        backgroundColor: 'skyblue',
        height: 30,
        marginLeft:30,
        marginRight:30,
        marginBottom:30
    },
    huecoTexto:{
        color: 'white'
 }
})
