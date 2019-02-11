import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Question extends React.Component {
    render() {
        let url = this.props.question.attachment.url;
        return (
            <View>
                <Text style={styles.question}> Question {this.props.index} </Text>
                <View style={styles.image}>
                <Image style={styles.imagen} source={{ uri: url }} />
                </View>
                <Text style={styles.content}> {this.props.question.question} </Text>
                <Text style={styles.tip}>Tip:</Text> 
                    <Text style={styles.tipContent}>{this.props.question.tips}</Text>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    question: {
        marginLeft: 10,
        color: 'green',
        fontSize:35,
        fontWeight: 'bold'
    },
    content: {
        fontSize:20,
        marginLeft:15,
        color:'black'
    },
    tip: {
        
        color:'green',
        fontSize:15,
        fontWeight: 'bold',
        marginLeft: 35
    },
    tipContent:{
        fontSize: 13,
        color: 'black',
        marginLeft: 40
    },
    image:{
        width: 200,
        height: 200,
        marginTop: 10,
        marginLeft:40,
        marginRight:40
    },
    imagen: {
        flex: 1,
        resizeMode: 'contain'
}
    

})
