import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({ 
    backgroundHero: {
        width: '100%',
        height: 250,
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
    },
    counters: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        margin: '1%',
    },
    individualCounter: {
        width: 180,
        height: 120,
        borderWidth: 1,
        padding: '5%',
        borderRadius: 13,
        /* boxShadow: '0 12px 16px rgba(0, 0, 0, 0.270)', */
    },
    counterTitle: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: '1%'
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }

})