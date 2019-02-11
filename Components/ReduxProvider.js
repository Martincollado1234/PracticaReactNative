import {Provider} from 'react-redux' ;
import GlobalState from './redux/reducers' ;
import { createStore } from 'redux' ;
import { questions} from "../assets/mock-data.js";
import React from 'react';
import GameScreen from './GameScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import IndexScreen from './IndexScreen';
import {View} from 'react-native';

const AppNavigator = createStackNavigator({
    IndexScreen: { screen: IndexScreen },
    GameScreen: { screen: GameScreen }
    },{
    initialRouteName: "IndexScreen",
    headerMode: 'none'
    })
    const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState ={
            score:0,
            finished: false,
            currentQuestion:0,
            questions: [...questions ]
        };
        this.store = this.configureStore();
    }
    render(){
        return (
            <Provider  store={ this.store }>
                <View style={{ height: '100%' }}>
                    <AppContainer/>
                </View>
            </Provider>
            );
    }
    configureStore() {
            return createStore(GlobalState, this.initialState);
    }
}        