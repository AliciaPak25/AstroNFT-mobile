import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import { ProductsStyles } from '../styles/ProductsStyles';

const ProductsHero = () => { 
    return(
        <View>
            <ImageBackground source={require('../../assets/productsHero.png')} resizeMode="cover" style={ProductsStyles.backgroundHero}>
                <View style={ProductsStyles.imagesHero}>
                    <Image source={require('../../assets/Hero1.png')} style={ProductsStyles.imageBallons}/>
                    <Image source={require('../../assets/Hero2.png')} style={ProductsStyles.imageBallons}/>
                </View>
            </ImageBackground>
        </View>
    );
}
export default ProductsHero;
