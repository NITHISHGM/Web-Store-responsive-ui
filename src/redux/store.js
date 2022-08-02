import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import reducer from "./reducer/Index";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  { reducer: reducer },
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
