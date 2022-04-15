import React from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';
import MyButton from './buttons/Buttons';

const HomeHero = ({navigation}) => {

    return(
            <View>
                <ImageBackground source={require('../../assets/backgroundHero.png')} resizeMode="cover" style={HomeStyles.backgroundHero}>
                    <View style={HomeStyles.containerLogo}>
                        <Image source={require('../../assets/logo.png')} alt='logo' style={HomeStyles.imageMoon}/>
                        <Text style={HomeStyles.logoText}>AstroNFT</Text>
                    </View>
                    <View style={HomeStyles.containerHero}>
                        <View style={HomeStyles.containerTextHero}>
                            <Text style={HomeStyles.heroTitle}>Lorem Ipsum</Text>
                            <MyButton 
                            onPress={() => navigation.navigate('Store')}
                            title={"Explore Products!"}
                            />
                        </View>
                        <View>
                            <Image source={require('../../assets/astronaut.png')} alt='astronaut' style={HomeStyles.astronautImage}/>
                        </View>
                    </View>
                </ImageBackground>
                <View style={HomeStyles.countersContainer}>
                    <View style={HomeStyles.counters}>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>259K</Text>
                            <Text style={HomeStyles.counterText}>NFT Sold</Text>
                            <Text style={HomeStyles.counterFooter}>Last Month</Text>
                        </View>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>10K</Text>
                            <Text style={HomeStyles.counterText}>New User</Text>
                            <Text style={HomeStyles.counterFooter}>Last Week</Text>
                        </View>
                    </View>
                    <View style={HomeStyles.counters}>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>200</Text>
                            <Text style={HomeStyles.counterText}>New NFT</Text>
                            <Text style={HomeStyles.counterFooter}>ON Market</Text>
                        </View>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>2</Text>
                            <Text style={HomeStyles.counterText}>Floor Price</Text>
                            <Text style={HomeStyles.counterFooter}>Last Month</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}
export default HomeHero;