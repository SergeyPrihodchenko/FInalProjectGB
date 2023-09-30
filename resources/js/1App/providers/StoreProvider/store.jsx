import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import resumePageSlice from "@/Pages/ResumeCreate/model/resumePageSlice";

export const createReduxStore = ({ asyncReducers }) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            resumePage:resumePageSlice,
        },
    });
    return store;
};
