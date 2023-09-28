import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";

export const createReduxStore = ({ asyncReducers }) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
    });
    return store;
};
