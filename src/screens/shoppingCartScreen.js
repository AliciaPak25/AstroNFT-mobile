import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { ShoppingStyle } from "../styles/ShoppingStyle"
import { CheckBox } from 'react-native-elements';
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {Ionicons} from "@expo/vector-icons";

const ShoppingCartScreen = (props) => {
    const [checked, setChecked] = useState(false);
    const [ETH, setETH] = useState();
    const [BNB, setBNB] = useState();
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getETH();
        getBNB();
    }, [reload]);

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

    const idProducts = props?.basket
    const filteredProducts = idProducts.basket.map(filter=> props.allProducts.filter(filtering=> filtering._id === filter))
    const CartProducts = []
    filteredProducts.map(filter=> {CartProducts.push(...filter)})

    function deleteBasket(id) {
        const basket = idProducts.basket.filter(filter=> filter !== id)
        dispatch({type: 'cart', payload: {basket: basket}})
        setReload(!reload)
        console.log(basket)
    }
    console.log(props.basket)
    return (
        <>
            {props.basket?.length !== 0
        ? CartProducts.map((products) => (
            <View>
            <View style={ShoppingStyle.title}>
                <Text style={{fontWeight: 'bold'}}>Cart</Text>
            </View>
            <View style={ShoppingStyle.cardContainer} key={products._id}>
                <Image source={{uri: products.file}} style={ShoppingStyle.imageShop} />
                <View style={ShoppingStyle.cartCard}>
                    <View style={ShoppingStyle.cartHeader}>
                        <Text style={ShoppingStyle.cartCardTitle}>{products.name}</Text>
                        <TouchableOpacity onPress={() => deleteBasket(products._id)}>
                        <Ionicons name="close" size={20} color={'black'} />
                        </TouchableOpacity>
                        
                        {/* <Image
                        source={require("../../assets/cruz.png")}
                        style={ShoppingStyle.cross}
                        onPress={deleteBasket(products._id)}
                        /> */}
                    </View>
                    <View style={ShoppingStyle.productsCategories}>
                        <Text style={{color: '#828282', marginRight: '1%'}}>CATEGORY:</Text>
                        <Text>{products.category}</Text>
                    </View>
                    <View style={ShoppingStyle.productsCategories}>
                        <Text style={{color: '#828282', marginRight: '1%'}}>TYPE:</Text>
                        <Text>{products.fileType}</Text>
                    </View>

                    <View style={ShoppingStyle.price}>
                        <Image source={require("../../assets/IconEth.png")} style={ShoppingStyle.eth} />
                        <Text>{products.price} {products.token}</Text>
                    </View>
                     <Text>USD {products.token == "ETH"
                  ? financial(products.price * ETH?.ethereum.usd) + " "
                  : financial(products.price * BNB?.binancecoin.usd) + " "}
                </Text>
                    
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