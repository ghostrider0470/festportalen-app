// src/store/slices/authSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {FilterState} from "../interfaces/filter.ts";


const initialState: FilterState = {
    keyword: '',
    categoryId: '',
    subCategories: [],
    regions: [],
    counties: [],
    page: 1,
    pageSize: 30,
    sortBy: '',
};

// Create the listing slice
export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            console.log("Setting filter", state, action.payload)
            state = action.payload;
        },
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        updateCategory: (state, action) => {
            state.categoryId = action.payload;
        },
        updateSubCategories: (state, action) => {
            state.subCategories = action.payload;
        },
        updateCountiesAndRegions: (state, action: { payload: { counties: string[], regions: string[] } }) => {
            state.regions = action.payload.regions;
            state.counties = action.payload.counties;
        },
        updateRegions: (state, action) => {
            state.regions = action.payload;
        },
        updateCounties: (state, action) => {
            state.counties = action.payload;
        },
        updatePage: (state, action) => {
            state.page = action.payload;
        },
        updatePageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        updateSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
    }
});

// Export action creators and reducer
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;