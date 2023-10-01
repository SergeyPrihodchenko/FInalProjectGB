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
};

export const resumePageCreate = createSlice({
    name: "resumePageCreate",
    initialState,
    reducers: {
        setUserId: (state, { payload }) => {
            state.user_id = payload;
        },

        setSkills: (state, { payload }) => {
            state.skill = payload;
        },

        addSkills: (state) => {
            state.skills = [...state.skills, state.skill];
        },

        removeSkills: (state, action) => {
            state.skills.splice(action.payload, 1);
            const newSkills = [...state.skills];
            state.skills = [...newSkills];
        },

        // clearSkill: (state) => {
        //     state.skills = [];
        // }
    },
});

// Action creators are generated for each case reducer function
export const { setUserId, setSkills, addSkills, removeSkills, clearSkill } =
    resumePageCreate.actions;

export default resumePageCreate.reducer;
