import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = [];

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setModalState(state, action) {
      return action.payload;
    },
  },
});

export const { setModalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
