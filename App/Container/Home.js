import React, { Component } from 'react';
import { NativeModules, View, StatusBar, StyleSheet,Text } from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    
    componentDidMount() {
        NativeModules.Device.getDeviceName((err ,name) => {
            console.log(err, name);
        });
        
        setTimeout(() =>  {
            this.setState({loading: false})
        }, 3000);
    }

    render() {
        return(
            <View style={style.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <View style={style.content}>
                    <Text>hello world</Text>
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


export default Home;