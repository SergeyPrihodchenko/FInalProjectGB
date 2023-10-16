import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    resumeList: [],
    resumeStatusViewed: [],
    resumeStatusRefuse: [],
    resumeStatusInvite: [],
};

export const resumeRefuse = createAsyncThunk(
    'candidate/resumeRefuse',
    async (resume, { rejectWithValue, dispatch }) => {
        const { resume_id, vacancy_id } = resume;
        try {
            const response = await axios.post('/refusal', { resume_id: resume_id, vacancy_id: vacancy_id });
            if (response.status !== 200) {
                throw new Error('Cant refuse');
            }
            return { resume_id: resume_id, vacancy_id: vacancy_id };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const resumeInvite = createAsyncThunk(
    'candidate/resumeInvite',
    async (resume, { rejectWithValue, dispatch }) => {
        const { resume_id, vacancy_id } = resume;
        try {
            const response = await axios.post('/invitation', { resume_id: resume_id, vacancy_id: vacancy_id });
            if (response.status !== 200) {
                throw new Error('Cant refuse');
            }
            return { resume_id: resume_id, vacancy_id: vacancy_id };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const candidatePageSlice = createSlice({
    name: "candidatePage",
    initialState,
    reducers: {
        setResumeList: (state, action) => {
            state.resumeList = action.payload;
        },
        setResumeStatusRefuse: (state, action) => {
            const refusesObj = action.payload.filter(el => el.title === 'Отказ').map(item => ({ resume_id: item.resume_id, vacancy_id: item.vacancy_id }))
            state.resumeStatusRefuse = [...state.resumeStatusRefuse, ...refusesObj];
        },
        setResumeStatusInvite: (state, action) => {
            const inviteObj = action.payload.filter(el => el.title === 'Приглашение').map(item => ({ resume_id: item.resume_id, vacancy_id: item.vacancy_id }))
            state.resumeStatusInvite = [...state.resumeStatusInvite, ...inviteObj];
        }

    },
    extraReducers: (builder) => {
        builder.addCase(resumeRefuse.fulfilled, (state, action) => {
            const item = action.payload;
            console.log(item);
            state.resumeStatusRefuse = [...state.resumeStatusRefuse, item];

        });
        builder.addCase(resumeInvite.fulfilled, (state, action) => {
            const item = action.payload;
            console.log(item);
            state.resumeStatusInvite = [...state.resumeStatusInvite, item];

        })

    }

});

export const {
    setResumeList,
    setResumeStatusRefuse,
    setResumeStatusInvite
} = candidatePageSlice.actions

export default candidatePageSlice.reducer;