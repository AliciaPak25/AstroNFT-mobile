import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
import ProductsScreen from '../screens/productsScreen';
import ContactScreen from '../screens/contactScreen';
import ShoppingCartScreen from '../screens/shoppingCartScreen';
import Tabs from './Tabs';
import { connect } from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, View} from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <>

        <Ionicons name="cart" size={20} color={'green'} style={styles.icon}/>
        
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Store' component={ProductsScreen} />
            <Drawer.Screen name='Contact' component={ContactScreen} />
            <Drawer.Screen name='Shop' component={ShoppingCartScreen} />
            <Drawer.Screen name='User' component={Tabs} />
        </Drawer.Navigator>
        

        
        </>
    );
}

const styles = StyleSheet.create({
    icon: {
       /*  marginRight: '5%',
        marginLeft: 'auto',
        marginTop: '20%', */
        position: 'relative',
        top: 10,
        left: 250,
        zIndex: 2,
    }
})


export default connect(null, null)(DrawerNavigator);
