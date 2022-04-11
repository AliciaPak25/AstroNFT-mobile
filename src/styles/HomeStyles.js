import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({ 
    backgroundHero: {
        width: '100%',
        height: 300,
    },
    astronautImage: {
        width: 200,
        height: 200,
    },
    containerHero: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    heroTitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
        margin: '10%',
    },
    buttonStore: {
        borderRadius: 10,
        backgroundColor: '#F2C94C'
    }

})