import { usePage } from "@inertiajs/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: "",
    profession: "",
    first_name: "",
    last_name: "",
    gender: "",
    region: "",
    date_of_birth: "",
    phone: "",
    citizenship: "",
    work_permit: "",
    education: "",
    educational_institute: [],
    companies: [],
    skill: [],
    experience: "",
    skills: [],
    resumes: "",
};

export const resumePage = createSlice({
    name: "resumePage",
    initialState,
    reducers: {
        setData: (state, { payload }) => {
            state.resumes = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setData } =
    resumePage.actions;

export default resumePage.reducer;
