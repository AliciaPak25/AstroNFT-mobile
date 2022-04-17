const initialState = {
    user: {
        view: false,
        message: '',
        success: null,
    },
    basket: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,
            }

        case 'cart':
                return {
                    ...state,
                    basket: action.payload,
                }
        default:
            return state
    }
}
export default UserReducer