import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vacancyNameInput: "",
    vacancyCityInput: "",
    vacancyPaymentInput: "",
    vacancyExperience: "",
    vacancySchedule: "",
    vacancyEmployment: "",
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
        setVacancyExperience: (state, action) => {
            state.vacancyExperience = action.payload;
        },
        setVacancySchedule: (state, action) => {
            state.vacancySchedule = action.payload;
        },
        setVacancyEmployment: (state, action) => {
            state.vacancyEmployment = action.payload;
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
        },
        removeResponsibilitiesItem: (state, action) => {
            state.responsibilitiesList.splice(action.payload, 1);
            const newResponsibilities = [...state.responsibilitiesList];
            state.responsibilitiesList = [...newResponsibilities];
        },
        //Условия
        setConditionsInput: (state, action) => {
            state.conditionsInput = action.payload;
        },
        setConditionsList: (state, action) => {
            state.conditionsList = action.payload;
        },
        removeConditionsItem: (state, action) => {
            state.conditionsList.splice(action.payload, 1);
            const newConditions = [...state.conditionsList];
            state.conditionsList = [...newConditions];
        },
        // Ключевые навыки
        setSkillsInput: (state, action) => {
            state.skillsInput = action.payload;
        },
        setSkillsList: (state, action) => {
            state.skillsList = action.payload;
        },
        removeSkillsItem: (state, action) => {
            state.skillsList.splice(action.payload, 1);
            const newSkills = [...state.skillsList];
            state.skillsList = [...newSkills];
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
        removeContactsItem: (state, action) => {
            state.contactsList.splice(action.payload, 1);
            const newContacts = [...state.contactsList];
            state.contactsList = [...newContacts];
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
    removeResponsibilitiesItem,
    setConditionsInput,
    setConditionsList,
    removeConditionsItem,
    setSkillsInput,
    setSkillsList,
    removeSkillsItem,
    setContactsNameInput,
    setContactsPositionInput,
    setContactsPhoneInput,
    setContactsList,
    removeContactsItem,
    setVacancyExperience,
    setVacancySchedule,
    setVacancyEmployment
} = vacancyPageCreateSlice.actions;

export default vacancyPageCreateSlice.reducer;
