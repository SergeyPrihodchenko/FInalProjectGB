import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import vacancyPageCreateReducer from "@/Pages/VacancyPageCreate/model/slice/vacancyPageCreateSlice";
import secondNavReducer from "@/4Widgets/SecondNav/model/slice/secondNavSlice";

export const createReduxStore = ({ asyncReducers }) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            vacancyPageCreate: vacancyPageCreateReducer,
            secondNav: secondNavReducer,
        },
    });
    return store;
};
