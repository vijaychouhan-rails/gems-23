import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { countData: 0 },
  reducers: {
    increment: (state) => {
      console.log("===state====", state.countData);
      state.countData += 1;
    },
    customOperation: (state, action) => {
      console.log("===action===", action.payload);
      state.countData += action.payload;
    },
  },
});

export const { increment, customOperation } = counterSlice.actions;

export default counterSlice.reducer;
