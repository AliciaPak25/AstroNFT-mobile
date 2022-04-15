import { StyleSheet } from "react-native";

export const ShoppingStyle = StyleSheet.create({
    title: {
        display: 'flex',
        fontWeight: 'bold',
        margin: '5%',
        fontSize: 40,
        color: "red",
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '2%',
        backgroundColor: '#fcfcf3',
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
    imageShop: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 130,
        alignItems: 'flex-start',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    cross: {
        width: 20,
        height: 20,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
    cartCard: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '5%',
        width: '100%'
    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%'
    },
    cartCardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    productsCategories: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1%'
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2%'
    },
    paypalSelected: {
        display: 'flex',
        flexDirection: 'row',
    },
    checkbox: {
        position:'absolute',
        top: '20%'
    }
})