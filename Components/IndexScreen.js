import React from 'react';
import { View } from 'react-native';
import StartButton from './StartButton';


export default class IndexScreen extends React.Component {
render() {
return (
       
          
          <View>
           <StartButton
            onPress={() => this.props.navigation.navigate('GameScreen')}
            text={"Play"}/>
          </View>
       
    
    

)
}
}