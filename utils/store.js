import rootReducer from "@/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

// Export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
