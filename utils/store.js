import rootReducer from "@/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "testApp3",
  storage,
  whitelist: ["users", "counterRedu"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (context) => {
  let myStore = null;

  myStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

  myStore.__persistor = persistStore(myStore);

  return myStore;
};

// Export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
