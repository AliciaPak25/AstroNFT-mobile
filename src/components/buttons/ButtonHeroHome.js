import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default ButtonHeroHome = ({ text, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text></Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
    }
})