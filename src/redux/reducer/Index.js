import { combineReducers } from "@reduxjs/toolkit";

//async
import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./SetListProduct";
const reducer = combineReducers({
  FETCH_PRODUCTS: FETCH_PRODUCTS,
  FETCH_PRODUCT: FETCH_PRODUCT,
});
export default reducer;
