// store.js

import rootReducer from "@/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// Create a makeStore function
const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

// Export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

// store.js

// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";

// // Create your reducer
// const counterSlice = createSlice({
//   name: "mycounter",
//   initialState: { count: Math.random() },
//   reducers: {
//     additem(state, action) {
//       state.count = Math.random();
//     },
//   },
// });

// // Extract the reducer from the slice
// const { reducer } = counterSlice;

// // Create a makeStore function
// const makeStore = (context) =>
//   configureStore({ reducer, devTools: process.env.NODE_ENV !== "production" });

// // Export an assembled wrapper
// export const wrapper = createWrapper(makeStore, { debug: true });
