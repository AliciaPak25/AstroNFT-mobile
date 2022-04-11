import React, {useEffect, useState} from 'react';
import {ScrollView, View, ImageBackground, Text, Image, Button} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const HomeHero = ({navigation}) => {

   /*  const [fontsLoaded, setFontsLoaded] = useState(false)

    useEffect(()=> {
        if(!fontsLoaded){
            loadFonts();
        }
    })

    const loadFonts = async() => {
        await Font.loadAsync({
            "Ubuntu-Title": require('../../assets/ubuntu-title-fr-1.1.ttf')
    })
    setFontsLoaded(true)
}
    if(!fontsLoaded){
        return(<View/>)
    } */
    return(
        <ScrollView>
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
            </View>
        </ScrollView>
    );
}
export default HomeHero;