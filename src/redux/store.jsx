import { configureStore } from "@reduxjs/toolkit";
import campersReduser from "./campersSlice";
import { modalReducer } from "./modalSlice";


export const store = configureStore({
    reducer: {
        campers: campersReduser,
        // filters: ,
        modal: modalReducer,
    }
})