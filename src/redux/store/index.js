import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likeReducer from "../reducers/likeReducer";
import selectedReducer from "../reducers/selectedReducer";
import songReducer from "../reducers/songsReducer";

const bigReducer = combineReducers({
  like: likeReducer,
  selected: selectedReducer,
  songs: songReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
