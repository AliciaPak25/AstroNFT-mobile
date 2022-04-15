import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions";

const Search = (props) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        props.filterProducts(props.allProducts, search)
    }, [search, props.allProducts]);
    
    function handleSearch(event) {
        event.preventDefault();
        setSearch(event.target.value)
    }
    
    return (
        <View>
            <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="c6c6c6"
            cancelIconColor="#c6c6c6"
            backgroundColor="#e7f0ff"
            placeholder="Search your NFT"
            onChangeText={handleSearch}
            onSearchPress={() => console.log("Search Icon is pressed")}
            /* onClearPress={() => this.filterList("")} */
            onPress={() => alert("onPress")}
            />
        </View>
    );
}
const mapDispatchToProps = {
    filterProducts: ProductActions.filterProducts,
  };
  
  const mapStateToProps = (state) => {
    return {
      allProducts: state.ProductReducer.allProducts,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);