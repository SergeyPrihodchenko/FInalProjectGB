import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEmployer: false,
};

export const navbarSliceSlice = createSlice({
    name: "navbarSliceSlice",
    initialState,
    reducers: {
        setIsEmployer: (state) => {
            state.isEmployer = !state.isEmployer;
        },
    },
});

export const { setIsEmployer } = navbarSliceSlice.actions;

export default navbarSliceSlice.reducer;
