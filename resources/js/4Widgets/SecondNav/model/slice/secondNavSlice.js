import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEmployer: false,
};

export const secondNavSlice = createSlice({
    name: "secondNavSlice",
    initialState,
    reducers: {
        setIsEmployer: (state) => {
            state.isEmployer = !state.isEmployer;
            console.log("state.isEmployer", state.isEmployer);
        },
    },
});

export const { setIsEmployer } = secondNavSlice.actions;

export default secondNavSlice.reducer;
