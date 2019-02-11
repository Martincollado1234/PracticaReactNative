import React from 'react';
import Actionbar from "./Actionbar";
import {  View } from 'react-native';
import Question from "./Question";
import Answer from "./Answer";

export default class Game extends React.Component {
    render() {
        
        return (
            <View>
                <Question
                    question={this.props.question}
                    index={this.props.index}
                    
                />
                {<Answer
                    question={this.props.question}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                />}
                <Actionbar 
                    indice ={this.props.index}
                    previous={this.props.onQuestionPrevious}
                    next={this.props.onQuestionNext}
                    submit2={this.props.submit1}
                    botonReset={this.props.reset}
                    navigation={this.props.navigation}
                    
                    

                /> 
            </View>
        );
    }
}

