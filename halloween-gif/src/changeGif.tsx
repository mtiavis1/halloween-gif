import { createSlice } from "@reduxjs/toolkit";

export const indexSlice = createSlice({
  name: "changeGif",
  initialState: {
    index: 0,
  },
  reducers: {
    increment: (state) => {
      state.index += 1;
    },
    reset: (state) => {
      state.index = 0;
    },
  }
});

export const { increment, reset } = indexSlice.actions;

export default indexSlice.reducer;