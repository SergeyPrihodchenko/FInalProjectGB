import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlicee";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
