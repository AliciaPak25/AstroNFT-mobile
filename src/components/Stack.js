import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/shoppingCartScreen';
import ProductsScreen from '../screens/productsScreen';
import {Ionicons} from "@expo/vector-icons";
import { connect } from 'react-redux';

const Stack = createStackNavigator();
function NFTStackNavigator() {

    return (

        <Stack.Navigator initialRouteName="Store"
            screenOptions={{ headerTitle: "Shopping App",
                            headerRight:(<Ionicons name="cart" size={20} color={'black'}/>)
        }}
        >
            <Stack.Screen name="Store" component={ProductsScreen}
                options={{ headerShown: false, }} />
            <Stack.Screen name="Shop" component={ShoppingCartScreen} />
            {/* <Stack.Screen name="Comments" component={CommentsScreen} options={({ navigation, route }) => ({
                headerTitle: "Comments"
            })} /> */}
        </Stack.Navigator>

    )
}
export default connect(null, null)(NFTStackNavigator);