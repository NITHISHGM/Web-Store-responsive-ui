import { constants } from "../constants/constants";
//async
export const FETCH_PRODUCTS = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_PRODUCTS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export const FETCH_PRODUCT = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_PRODUCT:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
