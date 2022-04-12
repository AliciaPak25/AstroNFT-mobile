import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
import ProductsScreen from '../screens/productsScreen';
import ContactScreen from '../screens/contactScreen';
import ShoppingCartScreen from '../screens/shoppingCartScreen';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Products' component={ProductsScreen} />
            <Drawer.Screen name='Contact' component={ContactScreen} />
            <Drawer.Screen name='Shop' component={ShoppingCartScreen} />
            <Drawer.Screen name='User' component={Tabs} />
        </Drawer.Navigator>
    );
}