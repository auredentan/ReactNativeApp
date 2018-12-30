import React from 'react';
import {Provider} from "react-redux";
import {Store} from "../store";
import {ScrollView, View} from "react-native";
import {CryptoContainer, Header} from "../components";


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Provider store={Store}>
                <View>
                    <Header/>
                    <CryptoContainer/>
                </View>
            </Provider>
        )
    }
}