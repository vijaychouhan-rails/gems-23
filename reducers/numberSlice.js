import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "number",
  initialState: {
    numbers: [],
  },
  reducers: {
    addNumber: (state) => {
      // Find the last number in the array
      const lastNumber = state.numbers[state.numbers.length - 1];

      // If the array is empty or the lastNumber is undefined, start with 1
      const nextNumber = lastNumber !== undefined ? lastNumber + 1 : 1;

      // Add the nextNumber to the array
      state.numbers.push(nextNumber);
    },
    removeNumber: (state) => {
      // Assuming you want to remove the last number
      state.numbers.pop();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNumber, removeNumber } = counterSlice.actions;

export default counterSlice.reducer;
