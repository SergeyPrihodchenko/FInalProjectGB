import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import vacancyPageCreateReducer from "@/Pages/VacancyPageCreate/model/slice/vacancyPageCreateSlice";
import vacancyListPageReducer from '@/Pages/VacancyListPage/model/slice/vacancyListPageSlice';
import secondNavReducer from "@/4Widgets/SecondNav/model/slice/secondNavSlice";
import resumePageCreateReducer from "@/Pages/ResumeCreate/model/slice/resumePageCreateSlice";
import navbarReducer from "@/4Widgets/Navbar/model/slice/navbarSlice";
import resumePageReducer from "@/Pages/ResumePage/model/slice/ResumePageSlice";

export const createReduxStore = ({ asyncReducers }) => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
            vacancyPageCreate: vacancyPageCreateReducer,
            navabr: navbarReducer,
            resumePageCreate: resumePageCreateReducer,
            vacancyListPage: vacancyListPageReducer,
            resumePage: resumePageReducer,
        }
    });
    return store;

};
