import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({ 
    backgroundHero: {
        width: '100%',
        height: 300,
    },
    containerLogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    imageMoon: {
        height: 20,
        width: 20,
        marginRight: 2,
    },
    logoText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 2,
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
    containerTextHero: {
        marginLeft: '3%',
        marginBottom: '8%'
    },
    heroTitle: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
        margin: '10%',
    },
    countersContainer: {
       /*  backgroundColor: '#3BAAFF', */
        paddingBottom: 5,
    },
    counters: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 5,
    },
    individualCounter: {
        backgroundColor: 'white',
        width: 170,
        height: 120,
        padding: '5%',
        borderRadius: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    counterTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1%'
    },
    counterText: {
        textAlign: 'center',
        fontSize: 15,
        margin: '2%',
        color: '#4F4F4F',
    },
    counterFooter: {
        textAlign: 'center',
        fontSize: 12,
        margin: '3%',
        color: '#828282',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    bodyCard: {
        width: '90%',
        margin: '1%',
        marginTop: '5%',
        marginBottom: '5%',
        padding: '2.5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imagesBody: {
        width: '100%',
        height: 300,
        padding: '3%',
    },
    titleBodyCard: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: '1%',
    },
    textBodyCard: {
        textAlign: 'center',
        textAlign: 'justify',
        margin: '3%',
        borderRadius: 17,
        
    },
})