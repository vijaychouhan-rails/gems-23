import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "numberData",
  initialState: { numData: 1000 },
  reducers: {
    increment1: (state) => {
      console.log("===state====", state);
    },
  },
});

export const { increment1 } = numberSlice.actions;

export default numberSlice.reducer;
