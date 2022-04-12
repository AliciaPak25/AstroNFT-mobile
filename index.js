import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './src/redux/reducers/';

const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

export default function Index(){
    return(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    );
}