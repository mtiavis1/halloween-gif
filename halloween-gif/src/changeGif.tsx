import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import p from "./gifImages/pumpkinDance.gif";
import pp from "./gifImages/pumpkinFall.gif";
import ppp from "./gifImages/Halloween-Fire.gif";
import pppp from "./gifImages/Halloween-Happy-GIF.gif";
import ppppp from "./gifImages/Happy-Halloween-2020.gif";
import pppppp from "./gifImages/Happy-Halloween-Free-gif.gif";


// Define a type for the slice state
interface CounterState {
  index: number;
  gifs: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  index: 0,
  gifs: [p, pp, ppp, pppp, ppppp, pppppp]
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      if (state.index === state.gifs.length - 1) {
        state.index = 0;
      } else {
        state.index += 1;
      }
    }
  },
})

export const { increment } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.indexer.index

export default counterSlice.reducer