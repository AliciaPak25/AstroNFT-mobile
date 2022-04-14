import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

const Search = () => {
    return (
        <View>
            <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="c6c6c6"
            cancelIconColor="#c6c6c6"
            backgroundColor="#e7f0ff"
            placeholder="Search your NFT"
            onChangeText={(text) => this.filterList(text)}
            onSearchPress={() => console.log("Search Icon is pressed")}
            onClearPress={() => this.filterList("")}
            onPress={() => alert("onPress")}
            />
        </View>
    );
}
export default Search;