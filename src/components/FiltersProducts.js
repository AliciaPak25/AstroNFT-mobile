import React from 'react';
import { View, Text } from 'react-native';
import {FiltersStyles} from '../styles/FiltersStyles';
import {Ionicons} from "@expo/vector-icons";
;

const items = [
    {
        text: "Art"
    },
    {
        text: "Gaming"
    },
    {
        text: "Collectibles"
    },
    {
        text: "Image"
    },
    {
        text: "Video"
    },
]
export default function Filters() {
    return (
        <View>
            <View>
                <Text style={FiltersStyles.titles}>Categories</Text>
                <View style={FiltersStyles.categoriesContainer}>
                    <Text style={FiltersStyles.categoryText}>{items[0].text}</Text>
                    <Text style={FiltersStyles.categoryText}>{items[1].text}</Text>
                    <Text style={FiltersStyles.categoryText}>{items[2].text}</Text>
                </View>
            </View>

            <View>
                <Text style={FiltersStyles.titles}>Order</Text>
                <View style={FiltersStyles.categoriesContainer}>
                    
                    <Ionicons name="logo-usd" color={'green'} size={20} />

                    <Ionicons name="logo-usd" color={'green'} size={20} />
                    <Ionicons name="logo-usd" color={'green'} size={20} />

                    <Ionicons name="logo-usd" color={'green'} size={20} />
                    <Ionicons name="logo-usd" color={'green'} size={20} />
                    <Ionicons name="logo-usd" color={'green'} size={20} />
                </View>
            </View>

            <View>
                <Text style={FiltersStyles.titles}>File Type</Text>
                <View style={FiltersStyles.categoriesContainer}>
                    <Text style={FiltersStyles.categoryText}><Ionicons name="image" color={'white'} size={15}/> {items[3].text}</Text>
                    <Text style={FiltersStyles.categoryText}><Ionicons name="videocam" color={'white'} size={15}/> {items[4].text}</Text>
                    
                    
                </View>
            </View>
        </View>
    );
}
