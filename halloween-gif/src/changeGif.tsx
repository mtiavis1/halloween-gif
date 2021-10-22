import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import p from "./gifImages/pumpkinDance.gif";
import pp from "./gifImages/pumpkinFall.gif";

// Define a type for the slice state
interface CounterState {
  index: number;
  gifs: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  index: 0,
  gifs: [p, pp]
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.index += 1;
    },
    reset: (state) => {
      state.index = 0;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.index += action.payload;
    },
  },
})

export const { increment, reset} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.indexer.index

export default counterSlice.reducer