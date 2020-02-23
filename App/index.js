import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from 'App/Routes';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
};

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        SplashScreen.hide();
    }

    render() {
        return (
            <NavigationContainer>
                <PaperProvider theme={theme}>
                    <AppNavigation />
                </PaperProvider>
            </NavigationContainer>
        );
    }
}


export default App;