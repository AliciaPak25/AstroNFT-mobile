import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { ShoppingStyle } from "../styles/ShoppingStyle"
import { CheckBox } from 'react-native-elements';

const ShoppingCartScreen = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View>
            <View style={ShoppingStyle.title}>
                <Text style={{fontWeight: 'bold'}}>Cart</Text>
            </View>
            <View style={ShoppingStyle.cardContainer}>
                <Image source={require("../../assets/shop.png")} style={ShoppingStyle.imageShop} />
                <View style={ShoppingStyle.cartCard}>
                    <View style={ShoppingStyle.cartHeader}>
                        <Text style={ShoppingStyle.cartCardTitle}>One Astro  #1715 by GIIO</Text>
                        <Image source={require("../../assets/cruz.png")} style={ShoppingStyle.cross} />
                    </View>
                    <View style={ShoppingStyle.productsCategories}>
                        <Text style={{color: '#828282', marginRight: '1%'}}>CATEGORY:</Text>
                        <Text>Premium</Text>
                    </View>
                    <View style={ShoppingStyle.productsCategories}>
                        <Text style={{color: '#828282', marginRight: '1%'}}>TYPE:</Text>
                        <Text>image</Text>
                    </View>

                    <View style={ShoppingStyle.price}>
                        <Image source={require("../../assets/IconEth.png")} style={ShoppingStyle.eth} />
                        <Text>0.121 ETh</Text>
                    </View>
                    <Text>= $ 46.828,55</Text>
                    
                </View>
            </View>
            <View style={ShoppingStyle.title}>
                <Text style={{fontWeight: 'bold'}}>Method</Text>
            </View>
            <View style={ShoppingStyle.cardContainer}>
                <Image source={require("../../assets/paypal.png")} style={ShoppingStyle.imageShop} />
                <View style={ShoppingStyle.cartCard}>
                    <View style={ShoppingStyle.cartHeader}>
                        <Text style={ShoppingStyle.subTitle}>Paypal</Text>
                        
                    </View>
                <View style={ShoppingStyle.paypalSelected}>
                    <View>
                        <Text>Debit or Credit Card</Text>
                        <Text>Paypal Credit</Text>
                        <CheckBox
                                    checked={checked}
                                    onPress={() => setChecked(!checked)}
                        />
                    </View>
                </View>
                </View>
            </View>
            <Button
                onPress={() => alert('your purchase has been confirmed')}
                title={'Purchase'}
                color={'black'}
            />
        </View>
    );
}

export default ShoppingCartScreen;