import { useForm } from "@inertiajs/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    contactsNameInput: "",
    contactsPositionInput: "",
    contactsPhoneInput: "",
    contactsList: [],
};

// const { data, setData, post, errors } = useForm({
//     title: "Вакансия тест", //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
//     city_id: "1",
//     payment: "1000",
//     city_work_id: "1",
//     experience: "нет опыта",
//     company_id: companies[0].id,
//     schedule: "Полная занятость",
//     employment: employment[0],
//     requirements: requirementsList,
//     responsibilities: responsibilitiesList,
//     conditions: conditionsList,
//     skills: skillsList,
//     contacts: contactsList,
// });
export const vacancyPageCreateSlice = createSlice({
    name: "vacancyPageCreate",
    initialState,
    reducers: {
        setVacancyNameInput: (state, action) => {
            state.vacancyNameInput = action.payload;
        },
        setVacancyCityInput: (state, action) => {
            state.vacancyCityInput = action.payload;
        },
        setVacancyPaymentInput: (state, action) => {
            state.vacancyPaymentInput = action.payload;
        },
        // Требования
        setRequirementsInput: (state, action) => {
            state.requirementsInput = action.payload;
        },
        setRequirementsList: (state, action) => {
            state.requirementsList = action.payload;
        },
        removeRequirementsItem: (state, action) => {
            state.requirementsList.splice(action.payload, 1);
            const newRequirements = [...state.requirementsList];
            state.requirementsList = [...newRequirements];
        },

        //Обязаности
        setResponsibilitiesInput: (state, action) => {
            state.responsibilitiesInput = action.payload;
        },
        setResponsibilitiesList: (state, action) => {
            state.responsibilitiesList = action.payload;
        }, //Условия
        setConditionsInput: (state, action) => {
            state.conditionsInput = action.payload;
        },
        setConditionsList: (state, action) => {
            state.conditionsList = action.payload;
        },
        // Ключевые навыки
        setSkillsInput: (state, action) => {
            state.skillsInput = action.payload;
        },
        setSkillsList: (state, action) => {
            state.skillsList = action.payload;
        },
        // Контакты
        setContactsNameInput: (state, action) => {
            state.contactsNameInput = action.payload;
        },
        setContactsPositionInput: (state, action) => {
            state.contactsPositionInput = action.payload;
        },
        setContactsPhoneInput: (state, action) => {
            state.contactsPhoneInput = action.payload;
        },
        setContactsList: (state, action) => {
            state.contactsList = action.payload;
        },
    },
});

export const {
    setVacancyNameInput,
    setVacancyCityInput,
    setVacancyPaymentInput,
    setRequirementsInput,
    setRequirementsList,
    removeRequirementsItem,
    setResponsibilitiesInput,
    setResponsibilitiesList,
    setConditionsInput,
    setConditionsList,
    setSkillsInput,
    setSkillsList,
    setContactsNameInput,
    setContactsPositionInput,
    setContactsPhoneInput,
    setContactsList,
} = vacancyPageCreateSlice.actions;

export default vacancyPageCreateSlice.reducer;
