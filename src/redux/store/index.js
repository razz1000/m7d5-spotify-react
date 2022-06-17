import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likeReducer from "../reducers/likeReducer";
import selectedReducer from "../reducers/selectedReducer";

const bigReducer = combineReducers({
  like: likeReducer,
  selected: selectedReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
