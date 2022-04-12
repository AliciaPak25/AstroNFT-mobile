import React from 'react';
import {ScrollView, View} from 'react-native';
import HomeHero from '../components/HomeHero';
import BodyHome from '../components/BodyHome';

const HomeScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <HomeHero navigation={navigation} />
                <BodyHome />
            </View>
        </ScrollView>
        
    );
}
export default HomeScreen;