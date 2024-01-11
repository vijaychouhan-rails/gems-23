import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import numberSlice from "./numberSlice";

const rootReducer = combineReducers({
  counterRedu: counterSlice,
  numberRedu: numberSlice,
  // Add more reducers as needed
});

export default rootReducer;
