import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "numberData",
  initialState: { numData: 1000 },
  reducers: {
    numIncrement: (state, action) => {
      state.numData += action.payload;
    },
  },
});

export const { numIncrement } = numberSlice.actions;

export default numberSlice.reducer;
