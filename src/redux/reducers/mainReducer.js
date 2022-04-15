import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const mainReducer = combineReducers({
    ProductReducer,
})

export default mainReducer
