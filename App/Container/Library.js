import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() =>  this.setState({loading: false}), 3000);
    }

    render() {
        return(
            <View style={style.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <View style={style.content}>
                    <Text>Im on the page library</Text>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:'row',
    },
    content:  {
        width: 200,
        height:200,
        justifyContent:'center',
        alignItems:'center',
    }
});


export default Library;