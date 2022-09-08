import { createSlice } from '@reduxjs/toolkit';

const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    count: 1,
  },
  reducers: {
    incrementCount(state, action) {
      state.count += 1;
    },
    decrementCount(state, action) {
      state.count -= 1;
    }
  }
});

export const { incrementCount, decrementCount } = calculateSlice.actions;

export default calculateSlice.reducer;
