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
        marginTop: '5%',
        borderRadius: 20,
        
    },
    cardProduct: {
        width: '90%',
        backgroundColor: '#daecff',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
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
    }
})