import { constants } from "../constants/constants";
import Fakejson from "../apis/Fakejson";

//async
export const FETCH_PRODUCTS = () => async (dispatch) => {
  const apiCall = await Fakejson.get("/products");
  console.log(apiCall.data);
  dispatch({
    type: constants.FETCH_PRODUCTS,
    payload: apiCall.data,
  });
};

export const FETCH_PRODUCT = (id) => async (dispatch) => {
  const apiCall = await Fakejson.get(`/products/${id}`);
  console.log(apiCall.data);
  dispatch({
    type: constants.FETCH_PRODUCT,
    payload: apiCall.data,
  });
};
