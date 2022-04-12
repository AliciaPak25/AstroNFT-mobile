import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../buttons/Colors';

const SIZES = ['small', 'medium', 'large'];
const TYPES = ['yellow'];
const ROUNDED = ['small', 'medium', 'large'];

export default function MyButton({children, onPress, type, size, title, rounded, navigation}) {

    const buttonSize = SIZES.includes(size) ? size : 'small';
    const buttonType = TYPES.includes(type) ? type : 'yellow';
    const buttonRound = ROUNDED.includes(rounded) ? rounded : 'small';

    const dynamicStyle = {
        width: buttonSize === 'large' ? '90%' : buttonSize === 'medium' ? 210 : 'auto',
        borderRadius: buttonRound === 'small' ? 5 : buttonRound === 'medium' ? 10 : 20,
        backgroundColor:
            buttonType === 'yellow'
            /* ? Colors.yellow : buttonType  */
    }
    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        marginLeft: 25,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        shadowColor: Colors.yellow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
    }

    return(
        <TouchableOpacity
        style={buttonStyle} 
        onPress={onPress}
        >
            <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity>
    );
}
