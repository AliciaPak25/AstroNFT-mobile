import {StyleSheet} from 'react-native';

export const ProductsStyles = StyleSheet.create({
    backgroundHero: {
        width: '100%',
        height: 200,
    },
    imagesHero: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
    },
    imageBallons: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    imageCardProduct: {
        borderRadius: 20,
        height: 300,
        width: 300,
    },
    cardProductContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 600,
        /* marginTop: '2%', */
        borderRadius: 20,
    },
    cardProduct: {
        width: '90%',
        backgroundColor: '#e7f0ff',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        shadowColor: "rgb(23, 82, 118)",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        
        elevation: 20,
    },
    textCardProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
    },
    titleCard: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '2%',
        fontSize: 20,
    },
    containerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%'
    },
    dataCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textDataCard: {
        marginLeft: 10,
    },
    productCardFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#828282',
    },
    priceMade: {
        color: '#828282'
    },
    buttonsProducts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        margin: '4%'
    },
    Cart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'
    },
    cartText: {
        fontSize: 20,
    }
})