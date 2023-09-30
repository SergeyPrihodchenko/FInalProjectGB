import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import vacancyPageCreateReducer from "@/Pages/VacancyPageCreate/model/slice/vacancyPageCreateSlice";

export const createReduxStore = ({ asyncReducers }) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            vacancyPageCreate: vacancyPageCreateReducer,
        },
    });
    return store;
};
