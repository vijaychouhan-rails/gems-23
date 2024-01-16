import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import numberSlice from "./numberSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
  counterRedu: counterSlice,
  numberRedu: numberSlice,
  users: usersSlice,
  // Add more reducers as needed
});

export default rootReducer;
