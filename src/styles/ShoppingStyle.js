import { StyleSheet } from "react-native";

export const ShoppingStyle = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        margin: '5%',
        fontSize: 40,
        color: "red",

    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        margin: '2%',
    },
   /*  cardTxt: {
        display: "flex",
        backgroundColor: "red",
        flexDirection: "column",
        fontSize: 10,
    }, */
    imageShop: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 130,
        alignItems: 'flex-start',
    },
    cross: {
        width: 20,
        height: 20,
    },
    subTitle: {
        color: "red",
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
    }
})