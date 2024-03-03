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
        setFilterBasedOnUrl: (state) => {
            const searchParams = new URLSearchParams(window.location.search);
            const regions = searchParams.get("regions") ? searchParams.get("regions").split(",") : [];

            const filter: FilterState = {
                categoryId: searchParams.get("categoryId"),
                subCategories: [],
                regions: regions,
                counties: [],
                keyword: searchParams.get("keyword"),
                page: 0,
                pageSize: 0,
                sortBy: "string"
            };
            console.log("Filter request", filter);
            state.categoryId = filter.categoryId;
            state.keyword = filter.keyword;
            state.regions = filter.regions;
            state.counties = filter.counties;
            state.page = filter.page;
            state.pageSize = filter.pageSize;
            state.sortBy = filter.sortBy;
        },

        setFilter: (state, action) => {
            console.log("Setting filter", state, action.payload)
            state.categoryId = action.payload.categoryId;
            state.keyword = action.payload.keyword;
            state.regions = action.payload.regions;
            state.counties = action.payload.counties;
            state.page = action.payload.page;
            state.pageSize = action.payload.pageSize;
            state.sortBy = action.payload.sortBy;
            setUrlBasedOnFilter(state);
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
export const setUrlBasedOnFilter = (filter: FilterState, path?: string) => {
    const searchParams = new URLSearchParams();
    console.log("Setting URL", filter, path)
    for (const key in filter) {
        const value = filter[key as keyof FilterState];
        if (Array.isArray(value)) {
            searchParams.set(key, value.join(","));
        } else {
            searchParams.set(key, value.toString());
        }
    }
    if (!path)
        path = window.location.pathname;

    const url = `${path}?${searchParams.toString()}`;
    window.history.replaceState({}, '', url);
    return url;
}



// Export action creators and reducer
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;