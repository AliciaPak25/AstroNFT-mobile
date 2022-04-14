import React from 'react';
import {ScrollView, View, Image, Text, Button} from 'react-native';
import ProductsHero from '../components/ProductsHero';
import {ProductsStyles} from '../styles/ProductsStyles';
import Search from '../components/Search';
import Filters from '../components/FiltersProducts';

const ProductsScreen = () =>{
    return(
        <ScrollView>
            <View>
                <ProductsHero />
                    <View>
                        <Search />
                        <Filters />
                    </View>
                <View style={ProductsStyles.cardProductContainer}>
                    <View style={ProductsStyles.cardProduct}>
                        <Image source={require('../../assets/imageHome2.png')} style={ProductsStyles.imageCardProduct}/>
                        <View style={ProductsStyles.textCardProduct}>
                        <Text style={ProductsStyles.titleCard}>One Astro #1715</Text>
                        <View style={ProductsStyles.containerText}>
                            <View style={ProductsStyles.dataCard}>
                                <Image source={require('../../assets/IconEth.png')}/>
                                <Text style={ProductsStyles.textDataCard}>0.121 ETH</Text>
                            </View>
                            <View style={ProductsStyles.dataCard}>
                                <Image source={require('../../assets/userImage.png')}/>
                                <Text style={ProductsStyles.textDataCard}>PicsOfPigs_X_NIFTS</Text>
                            </View>
                            </View>
                            <View style={ProductsStyles.productCardFooter}>
                                <Text style={ProductsStyles.priceMade}>USD 46,828.55</Text>
                                <Text style={ProductsStyles.priceMade}>Made by</Text>
                            </View>
                        </View>
                        <Button
                        onPress={()=> alert('hello')}
                        title={'View more'}
                        color={'black'}
                        />
                        <Button
                        onPress={()=> alert('hola')}
                        title={'Add'}
                        color={'green'}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProductsScreen;