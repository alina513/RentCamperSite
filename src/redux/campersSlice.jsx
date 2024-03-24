import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersInitialstate = {
    campersItems: [],
    isLoading: false,
  error: null,
};

const campersSlise = createSlice ({
    name: 'campers',
    initialState: campersInitialstate,
    extraReducers: builder =>{
        builder
        .addCase(fetchCampers.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.campersItems = action.payload;
        })
        .addCase(fetchCampers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

const campersReducer = campersSlise.reducer;
export default campersReducer;