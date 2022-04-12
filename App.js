import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/Drawer';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
}

