import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skillUser: ["123", "456"],
};

export const resumePageSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addSkill: (state, action) => {
            setData("skills", [...data.skills, skill]);
            setSkill("");
        },

        removeSkill: (state) = (index) => {
            data.skills.splice(index, 1);
            setData("skills", [...data.skills]);
        }
        
    },
});

// Action creators are generated for each case reducer function
export const { addSkill, removeSkill } = resumePageSlice.actions;

export default resumePageSlice.reducer;