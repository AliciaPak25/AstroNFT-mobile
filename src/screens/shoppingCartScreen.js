import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Button } from 'react-native';
import { ShoppingStyle } from "../styles/ShoppingStyle"
import { CheckBox } from 'react-native-elements';
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import axios from "axios";
/* import NFTStackNavigator from '../components/Stack'; */

const ShoppingCartScreen = (props) => {
    const [checked, setChecked] = useState(false);
    const [ETH, setETH] = useState();
    const [BNB, setBNB] = useState();

    const deleteNft = (id) => {
        props.delteNftToBasket(id);
        console.log(id);
    };

    const getETH = async () => {
        try {
            const res = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
            );
        setETH(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getBNB = async () => {
        try {
            const res = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
            );
        setBNB(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    useEffect(() => {
        getETH();
        getBNB();
    }, []);

    const idProducts = props.basket
    const filteredProducts = idProducts.basket.map(filter=> props.allProducts.filter(filtering=> filtering._id === filter))
    const emptyArray = []
    filteredProducts.map(filter=> {emptyArray.push(filter.name)})

    console.log(emptyArray);
    return (
        <>
            {props.basket?.length !== 0
        ? filteredProducts.map((products) => (
            <View>
            <View style={ShoppingStyle.title}>
                <Text style={{fontWeight: 'bold'}}>Cart</Text>
            </View>
            <View style={ShoppingStyle.cardContainer} key={products._id}>
                <Image source={require("../../assets/shop.png")} style={ShoppingStyle.imageShop} />
                <View style={ShoppingStyle.cartCard}>
                    <View style={ShoppingStyle.cartHeader}>
                        <Text style={ShoppingStyle.cartCardTitle}>{products.name}</Text>
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
          {/*   <View style={ShoppingStyle.title}>
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
            </View> */}
           {/*  <Button
                onPress={() => alert('your purchase has been confirmed')}
                title={'Purchase'}
                color={'black'}
            /> */}
            </View>
        ))
        : ""}
        
        </>
    );
}
  const mapStateToProps = (state) => {
    return {
      user: state.UserReducer.user,
      allProducts: state.ProductReducer.allProducts,
      basket: state.UserReducer.basket
    };
  };

  const mapDispatchToProps = {
    getAllProducts: ProductActions.getAllProducts,
    delteNftToBasket: UserActions.delteNftToBasket,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);