import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image, Text, Button, StyleSheet} from 'react-native';
import ProductsHero from '../components/ProductsHero';
import {ProductsStyles} from '../styles/ProductsStyles';
import Search from '../components/Search';
import Filters from '../components/FiltersProducts';
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions"
import UserActions from "../redux/actions/UserActions"
import { Video } from 'expo-av';
import axios from "axios";
import {Ionicons} from "@expo/vector-icons";
import { useDispatch } from 'react-redux'

const ProductsScreen = (props) =>{
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const dispatch = useDispatch()
    const [BTC, setBTC] = useState();
    const [ETH, setETH] = useState();
    const [BNB, setBNB] = useState();

    const getBTC = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
        );
        setBTC(res.data);
      } catch (error) {
        console.error(error);
      }
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

    useEffect(() => {
        props.getAllProducts();
        getBTC();
        getETH();
        getBNB();
    }, []);

    const addBasket = (id) => {
      const userId = props.user?.user?.id
      console.log(props.user.user)
      const searchNftInBasket = props.user?.user?.basket.filter(filter => filter.nftId._id === id)
      {
        userId === undefined ? props.navigation.navigate('User') :
          searchNftInBasket.length === 1 ?
            dispatch({ type: 'user', payload: { view: true, message: "You have already added this nft to the basket", user: props.user.user } }) :
            props.addToBasket(id, userId)
      }
    }

    function financial(x) {
      return Number.parseFloat(x).toFixed(2);
    }

    return(
      <ScrollView>
        <View>

          <ProductsHero />
          <View>
            <Search />
            <Filters />
          </View>

          {props?.allProducts && props.filteredProducts.length > 0 ? (props.filteredProducts.map((product) => (
            <View style={ProductsStyles.cardProductContainer} key={product._id}>
              <View style={ProductsStyles.cardProduct}>
                {product.file.split(".")[3] === "png" || product.file.split(".")[3] === "gif" ? (
                  <Image source={{uri: product.file}} style={ProductsStyles.imageCardProduct} />
                ) : (
                  <Video
                    ref={video}
                    /* style={styles.video} */
                    style={ProductsStyles.imageCardProduct}
                    source={{
                      uri: product.file
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                  />
                )}

                        <View style={ProductsStyles.textCardProduct}>
                        <Text style={ProductsStyles.titleCard}>{product.name}</Text>
                        <View style={ProductsStyles.containerText}>
                            <View style={ProductsStyles.dataCard}>
                                <Image source={require('../../assets/IconEth.png')}/>
                                <Text style={ProductsStyles.textDataCard}>{product.price} {product.token}</Text>
                            </View>
                            <View style={ProductsStyles.dataCard}>
                                <Image source={require('../../assets/userImage.png')}/>
                                <Text style={ProductsStyles.textDataCard}>{product.creator}</Text>
                            </View>
                            </View>
                            <View style={ProductsStyles.productCardFooter}>
                                <Text style={ProductsStyles.priceMade}>{product.token == "ETH"
                  ? financial(product.price * ETH?.ethereum.usd) + " "
                  : financial(product.price * BNB?.binancecoin.usd) + " "}
                USD</Text>
                                <Text style={ProductsStyles.priceMade}>Made by</Text>
                            </View>
                        </View>
                        <View style={ProductsStyles.buttonsProducts}>
                            <Button
                            onPress={()=> alert('hello')}
                            title={'View more'}
                            color={'black'}
                            />
                            <Button
                            onPress={()=> addBasket(product._id)}
                            title={'Add'}
                            color={'green'}
                            />
                            <Ionicons name="cart" size={20} color={'black'}/>
                        </View>
                    </View>

                </View>
        ))
                    ) : (
                        <Text>There are no products</Text>
                    )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const mapStateToProps = (state) => {
    return {
      allProducts: state.ProductReducer.allProducts,
      user: state.UserReducer.user,
      filteredProducts: state.ProductReducer.filteredProducts,
    };
  };
  
  const mapDispatchToProps = {
    getAllProducts: ProductActions.getAllProducts,
    addToBasket: UserActions.addToBasket,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);

