import React from 'react';
import {View, ImageBackground, Text, Image, Button} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const HomeHero = ({navigation}) => {

    return(
            <View>
                <ImageBackground source={require('../../assets/backgroundHero.png')} resizeMode="cover" style={HomeStyles.backgroundHero}>
                    <View style={HomeStyles.containerHero}>
                        <View>
                            <Text style={HomeStyles.heroTitle}>Lorem Ipsum</Text>
                            <Button 
                            onPress={() => navigation.navigate('Products')}
                            title="Explore Store!"
                            color="#F2C94C"
                            />
                        </View>
                        <View>
                            <Image source={require('../../assets/astronaut.png')} alt='astronaut' style={HomeStyles.astronautImage}/>
                        </View>
                    </View>
                </ImageBackground>
                <View>
                    <View style={HomeStyles.counters}>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>259K</Text>
                            <Text>NFT Sold</Text>
                            <Text>Last Month</Text>
                        </View>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>10K</Text>
                            <Text>New User</Text>
                            <Text>Last Week</Text>
                        </View>
                    </View>
                    <View style={HomeStyles.counters}>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>200</Text>
                            <Text>New NFT</Text>
                            <Text>ON Market</Text>
                        </View>
                        <View style={HomeStyles.individualCounter}>
                            <Text style={HomeStyles.counterTitle}>2</Text>
                            <Text>Floor Price</Text>
                            <Text>Last Month</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}
export default HomeHero;