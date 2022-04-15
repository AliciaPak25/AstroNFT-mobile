import {StyleSheet} from 'react-native';

export const FiltersStyles = StyleSheet.create({
    titles: {

        color: '#828282',
        fontSize: 17,
        marginTop: '2%',
        marginLeft: '3%'
    },
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: '2%'
    },
    categoryText: {
        backgroundColor: '#494949',
        color: 'white',
        padding: '2%',
        borderRadius: 30,
        fontSize: 15,
    }
})