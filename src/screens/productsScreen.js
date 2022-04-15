import React, {useEffect} from 'react';
import {ScrollView, View, Image, Text, Button} from 'react-native';
import ProductsHero from '../components/ProductsHero';
import {ProductsStyles} from '../styles/ProductsStyles';
import Search from '../components/Search';
import Filters from '../components/FiltersProducts';
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions"
/* import UserActions from "../redux/actions/UserActions" */
/* import Video from 'react-native-video'; */

const ProductsScreen = (props) =>{

    useEffect(() => {
        props.getAllProducts();
    }, []);

    return(
        <ScrollView>
            <View>
                <ProductsHero />
                    <View>
                        <Search />
                        <Filters />
                    </View>

                    {props?.allProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.map((product) => (
                <View style={ProductsStyles.cardProductContainer} key={product._id}>
                    <View style={ProductsStyles.cardProduct}>
                    {/* {
                product.file.split('.')[3] === 'png' || product.file.split('.')[3] === 'gif'
                ? <Image source={require('product.file')} style={ProductsStyles.imageCardProduct} />
                : <Text>Video</Text>
                } */}
                
                {/* <ItemProductVideo controls><source src={product.file} type="" /></ItemProductVideo> */}
                <Image source={{uri: product.file}} style={ProductsStyles.imageCardProduct} />

                {/* <Video source={{uri: product.file}}   
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} /> */}

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
                                <Text style={ProductsStyles.priceMade}>USD 46,828.55</Text>
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
                            onPress={()=> alert('hola')}
                            title={'Add'}
                            color={'green'}
                            />
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
const mapStateToProps = (state) => {
    return {
      allProducts: state.ProductReducer.allProducts,
      /* user: state.UserReducer.user, */
      filteredProducts: state.ProductReducer.filteredProducts,
    };
  };
  
  const mapDispatchToProps = {
    getAllProducts: ProductActions.getAllProducts,
    /* addToBasket: UserActions.addToBasket, */
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);

