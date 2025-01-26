import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles immutability
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetCounter: (state) => {
        state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
