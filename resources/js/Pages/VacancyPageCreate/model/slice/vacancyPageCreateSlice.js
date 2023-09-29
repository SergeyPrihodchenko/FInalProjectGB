import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    vacancyNameInput: "",
    vacancyCityInput: "",
    vacancyPaymentInput: "",
    requirementsInput: "",
    requirementsList: [],
    responsibilitiesInput: "",
    responsibilitiesList: [],
    conditionsInput: "",
    conditionsList: [],
    skillsInput: "",
    skillsList: [],
    contactsList: [],
    contactsName: "",
    contactsPosition: "",
    contactsPhone: "",
};

export const vacancyPageCreateSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setVacancyNameInput: (state, action) => {
            state.value += action.payload;
        },
        setVacancyCityInput: (state, action) => {
            state.value += action.payload;
        },
        setVacancyPaymentInput: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    setVacancyNameInput,
    setVacancyCityInput,
    setVacancyPaymentInput,
} = vacancyPageCreateSlice.actions;

export default vacancyPageCreateSlice.reducer;
