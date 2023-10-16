import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEmployer: false,
};

export const navbarSliceSlice = createSlice({
    name: "navbarSliceSlice",
    initialState,
    reducers: {
        setIsEmployer: (state, action) => {
            console.log("setIsEmployer", action.payload);
            state.isEmployer = action.payload;
        },
    },
});

export const { setIsEmployer } = navbarSliceSlice.actions;

export default navbarSliceSlice.reducer;
