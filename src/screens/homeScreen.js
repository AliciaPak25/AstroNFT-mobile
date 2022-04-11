import React from 'react';
import {View, Text} from 'react-native';
import HomeHero from '../components/HomeHero';
import *as Font from 'expo-font';

const HomeScreen = () => {
    return(
        <View>
            <HomeHero/>
            <Text>Home Page</Text>
        </View>
    );
}
export default HomeScreen;