import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import numberSlice from "./numberSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  numbers: numberSlice,
  // Add more reducers as needed
});

export default rootReducer;
