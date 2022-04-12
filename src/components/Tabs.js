import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import SignInScreen from '../screens/user/SignInScreen';
import SignUpScreen from '../screens/user/SignUpScreen';
import UserScreen from '../screens/user/UserScreen';

const Tab = createBottomTabNavigator();
export default function Tabs() {

    return (
        <Tab.Navigator initialRouteName='UserAccount'
            screenOptions={{
                'tabBarActiveTintColor': "#FFFFFF",
                'tabBarInactiveTintColor': "#FFFFFF",
                'tabBarActiveBackgroundColor': "#3BAAFF",
                'tabBarInactiveBackgroundColor': "#494949",
            }}
        >
            <Tab.Screen name='SignUp' component={SignUpScreen}
                options={{
                    title: "Sign Up",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-add" size={size} color={color}/>
                    )
                }}
            />
                
            <Tab.Screen name='SignIn' component={SignInScreen}
                options={{
                    title: "Sign In",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='ios-person' size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen name='SignOut' component={UserScreen}
                options={{
                    title: "Log Out",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="log-out" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
