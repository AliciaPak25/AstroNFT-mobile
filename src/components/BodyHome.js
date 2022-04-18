import React from 'react';
import {View, Text, Image} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const BodyHome = () => {
    return(
        <View style={HomeStyles.bodyContainer}>
                <View style={HomeStyles.bodyCard}>
                    <Image source={require('../../assets/imageHome1.png')} alt='astronaut-with-flag' style={HomeStyles.imagesBody}/>
                    <Text style={HomeStyles.titleBodyCard}>What is a NFT?</Text>
                    <Text style={HomeStyles.textBodyCard}>

NFT stands for non-fungible token. It's generally built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum, but that's where the similarity ends.The reason is that  physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another.</Text>
                </View>
                <View style={HomeStyles.bodyCard}>
                    <Image source={require('../../assets/imageHome2.png')} alt='astronaut-with-flag' style={HomeStyles.imagesBody}/>
                    <Text style={HomeStyles.titleBodyCard}>About Us:</Text>
                    <Text style={HomeStyles.textBodyCard}>
We are a company who built the biggest marketplace of NFTs in the world, in our website you can sell and buy NTFs safely with the privacity you need.
</Text>
                </View>
                
        </View>
    );
}
export default BodyHome;