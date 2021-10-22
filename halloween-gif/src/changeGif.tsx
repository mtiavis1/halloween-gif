import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from './store'

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

export const selectIndex = (state: RootState) => state.indexer.index

export default indexSlice.reducer;