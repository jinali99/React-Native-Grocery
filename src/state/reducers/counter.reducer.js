import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterReducer = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
  },
});

export const {increment} = counterReducer.actions;

export default counterReducer.reducer;
