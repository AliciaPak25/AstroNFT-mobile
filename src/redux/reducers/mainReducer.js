import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";

const mainReducer = combineReducers({
    ProductReducer,
    UserReducer,
})

export default mainReducer
