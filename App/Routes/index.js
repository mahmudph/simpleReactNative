import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { View, Button, TouchableNativeFeedback } from 'react-native';


import Home from 'App/Container/Home';
import Library from 'App/Container/Library';
import Produk from 'App/Container/Produk';


const optionsScreen = (title) => {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#593BED',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <View style={{ justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 5 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableNativeFeedback onPress={() => alert('hhhhh')}>
                        <Icon name="ios-search" size={24} color="#FFF" />
                    </TouchableNativeFeedback>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableNativeFeedback>
                        <Icon name="ios-notifications" size={30} color="#FFF" />
                    </TouchableNativeFeedback>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableNativeFeedback >
                        <SimpleLineIcons name="options-vertical" color="#FFF" size={22} color="#FFF" />
                    </TouchableNativeFeedback>
                </View>
            </View>
        ),
        headerLeft: () => (
                <View style={{ marginLeft: 15, padding: 10, }}>
                    <TouchableNativeFeedback>
                            <Icon name="ios-menu" size={24} color="#FFF" />
                    </TouchableNativeFeedback>
                </View>
        )
    }
}



const HomeNavigation = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeNavigation.Navigator>
            <HomeNavigation.Screen name="Home" component={Home}
                options={optionsScreen('Home App')}
            />
            <HomeNavigation.Screen name="Notifications" component={Home} />
            <HomeNavigation.Screen name="Profile" component={Home} />
            <HomeNavigation.Screen name="Settings" component={Home} />
        </HomeNavigation.Navigator>
    )
}

const LibraryNavigator = createStackNavigator()

const LibraryStack = () => {
    return (
        <LibraryNavigator.Navigator>
            <LibraryNavigator.Screen name="Home" component={Library} options={optionsScreen('Library')} />
            <LibraryNavigator.Screen name="Notifications" component={Home} />
            <LibraryNavigator.Screen name="Profile" component={Home} />
            <LibraryNavigator.Screen name="Settings" component={Home} />
        </LibraryNavigator.Navigator>
    )
}

const ProdukNavigator = createStackNavigator();

const ProdukStack = () => {
    return (
        <ProdukNavigator.Navigator>
            <ProdukNavigator.Screen name="Home" component={Produk} options={optionsScreen('Produk')} />
            <ProdukNavigator.Screen name="Notifications" component={Home} />
            <ProdukNavigator.Screen name="Profile" component={Home} />
            <ProdukNavigator.Screen name="Settings" component={Home} />
        </ProdukNavigator.Navigator>
    )
}

const BottomTapNavigation = createMaterialBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <BottomTapNavigation.Navigator
            nitialRouteName="Home"
            activeColor="#593BED"
            inactiveColor="#CECECE"
            barStyle={{ backgroundColor: '#FFF' }}
        >
            <BottomTapNavigation.Screen name="Home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="md-home" color={color} size={32} />
                    ),
                }}
            />
            <BottomTapNavigation.Screen name="Notifications" component={ProdukStack}
                options={{
                    tabBarLabel: 'Produk',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-people" color={color} size={32} />
                    ),
                }} />
            <BottomTapNavigation.Screen name="Profile" component={LibraryStack}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-heart" color={color} size={32} />
                    ),
                }}
            />
        </BottomTapNavigation.Navigator>
    )
}

const app = createSwitchNavigator({
    app: { screen: BottomTabStack }
})

export default createAppContainer(app);