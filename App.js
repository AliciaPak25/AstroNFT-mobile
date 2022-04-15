import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/components/Drawer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './src/redux/reducers/mainReducer';

const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

