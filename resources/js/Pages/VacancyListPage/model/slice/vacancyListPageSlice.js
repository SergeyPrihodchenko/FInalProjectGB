import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status: null,
    error: null,
    favouritesList: [],
    vacancyList: [],
    pageIndex: 1,
    total: 0
};
export const fetchVacancyList = createAsyncThunk(
    'vacancy/fetchVacancyList',
    async (filterData, { rejectWithValue, getState, dispatch }) => {
        try {
            const { pageIndex } = getState().vacancyListPage;
            const response = await axios.post(`/vacancies/filter?page=1`, {
                filterData: filterData,
            });
            if (response.status !== 200) {
                throw new Error('error');
            }
            const { data } = response.data;
            const total = response.data.total;
            dispatch(setTotal(total));
            dispatch(setPageIndex(pageIndex + 1));
            // console.log('redux total', response.data.total);
            // console.log('redux pageIndex', pageIndex);
            // console.log('redux filterData', filterData);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)

        }
    }
);
export const loadVacancyOnScroll = createAsyncThunk(
    'vacancy/loadVacancyOnScroll',
    async (filterData, { rejectWithValue, getState, dispatch }) => {
        const { pageIndex } = getState().vacancyListPage;
        const response = await axios.post(`/vacancies/filter?page=${pageIndex}`, { filterData: filterData });
        const { data } = response.data;
        return data;
    }
);

export const addToFavourites = createAsyncThunk(
    'vacancy/addToFavourites',
    async ({ user, id }, { rejectWithValue, dispatch }) => {

        try {
            const response = await axios.post('/addLike', { like: { user_id: user.id, vacancy_id: id } });
            if (response.status !== 200) {
                throw new Error('Can\'t add to favourites');
            }
            dispatch(setAddToFavourites(id));

        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);
export const deleteFromFavourites = createAsyncThunk(
    'vacancy/deleteFromFavourites',
    async (id, { rejectWithValue, dispatch }) => {

        try {
            const response = await axios.post('/deleteLike', { id: { vacancy_id: id } });
            if (response.status !== 200) {
                throw new Error('Can\'t remove from favourites');
            }
            dispatch(setRemoveFavourites(id));

        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);


export const vacacyListPageSlice = createSlice({
    name: "vacacyListPage",
    initialState,
    reducers: {
        // Избранные вакансии
        setFavouritesList: (state, action) => {
            state.favouritesList = action.payload;
        },
        setPageIndex: (state, action) => {
            state.pageIndex = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setAddToFavourites: (state, action) => {
            state.favouritesList = [...state.favouritesList, action.payload]
            console.log(state.favouritesList);
        },
        setRemoveFavourites: (state, action) => {
            state.favouritesList = state.favouritesList.filter(el => el !== action.payload);
        },
        // Список вакансий
        setVacancyList: (state, action) => {
            // state.vacancyList = state.vacancyList.filter(vacancy => vacancy.id !== action.payload.id);
            state.vacancyList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVacancyList.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            console.log(state.status);

        });
        builder.addCase(fetchVacancyList.fulfilled, (state, action) => {
            state.vacancyList = action.payload;
            state.status = 'resolved';
        });
        builder.addCase(fetchVacancyList.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
        builder.addCase(loadVacancyOnScroll.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            console.log(state.status);

        });
        builder.addCase(loadVacancyOnScroll.fulfilled, (state, action) => {
            state.status = 'rejected';
            state.vacancyList = [...state.vacancyList, ...action.payload]
        });
        builder.addCase(addToFavourites.rejected, (state, action) => {
            state.status = 'rejected likes';
            state.error = action.payload;
        });
    }

});

export const {
    setFavouritesList,
    setVacancyList,
    setPageIndex,
    setTotal,
    setAddToFavourites,
    setRemoveFavourites,
    setStatus
} = vacacyListPageSlice.actions

export default vacacyListPageSlice.reducer;