import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homeScreen';
/* import CitiesScreen from '../screens/CitiesScreen';
import Tabs from './Tabs'; */

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen} />
         {/*    <Drawer.Screen name='Cities' component={CitiesScreen} />
            <Drawer.Screen name='User' component={Tabs} /> */}
        </Drawer.Navigator>
    );
}