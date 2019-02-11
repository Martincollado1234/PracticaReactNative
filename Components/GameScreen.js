import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from  "./Navbar";
import {questionAnswer, initQuestions,reset} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {submit} from './redux/actions';
import { View,TouchableHighlight,Text,StyleSheet} from 'react-native';



class GameScreen extends React.Component {
  constructor(props){
    super(props)
    this.previous=this.previous.bind(this)
    this.next=this.next.bind(this)
    this.submit=this.submit.bind(this)
    this.cargaQuizzes=this.cargaQuizzes.bind(this)
    this.resetButton=this.resetButton.bind(this)
    
  }
  previous(){
    if(this.props.currentQuestion===0) {
      return
    }
    this.props.dispatch(changeQuestion(this.props.currentQuestion-1))
  }
  next(){
    if(this.props.currentQuestion===this.props.questions.length-1){
      return
    }
     this.props.dispatch(changeQuestion(this.props.currentQuestion+1))
  }
  submit(){
    this.props.dispatch(submit(this.props.questions))
  }
  resetButton(){
    this.props.dispatch(reset())
  }
  
  cargaQuizzes() {
    let quizzes = []
    fetch("https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=dded81ef2abf8d555904")
      .then(results => {
        return results.json();
      })
      .then(data => {
        data.map((item) => {
          if (item.question) {
            quizzes.push(item);
          }
        })
        this.props.dispatch(initQuestions(quizzes))
      })
      .catch(error => {
        console.log("Error")
      })
  }

  componentDidMount() {
    this.cargaQuizzes();
    
  }
  
 
  render(){
    if (this.props.finished) 
     return(
        <View>
          <Navbar/>
          <View>
            <Text style={styles.txtscore}> Has obtenido {this.props.score} puntos</Text> 
          </View>
          <View>
            <TouchableHighlight style= {styles.button} onPress = {() => { 
               this.props.navigation.navigate('IndexScreen')
               this.resetButton}
            }>
              <Text style={styles.txt}>Reiniciar</Text>
            </TouchableHighlight>
          </View>
        </View>
     );
    else{
     return (
        <View>
          <Navbar/>
          <Game 
            index = {this.props.currentQuestion +1} 
            question ={this.props.questions[this.props.currentQuestion]}
            onQuestionAnswer={(answer)=>{
              this.props.dispatch(questionAnswer(this.props.currentQuestion,answer))
                }}
            submit1 ={this.submit }
            onQuestionNext= {this.next} 
            onQuestionPrevious= {this.previous}
            reset= {this.resetButton}
            navigation={this.props.navigation}
            />
          
          
            
        </View>
     );
    }
  }
}
function mapStateToProps(state){
  return{
      ...state
  };
}

const styles= StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  button:{
      padding: 20,
      margin: 20,
      backgroundColor: 'red',
      color: 'black',
      borderWidth: 3,
      borderColor: 'black',
      fontSize: 25,
      textAlign: 'center'
      
      
  },
  txtscore: {
    marginTop:30,
    marginLeft:30,
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:30,
    textAlign: 'center'

    
    
  }
})
export default connect(mapStateToProps)(GameScreen);

          