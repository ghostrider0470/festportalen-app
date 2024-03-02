// src/store/slices/categoriesSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {CategoriesState} from "../interfaces/categories.ts";


export const initialListingState: CategoriesState = {
    categories: [],
    status: 'pending',
}


export const getMainCategories = createAsyncThunk('listing/get-main-categories', async (request) => {
    // @ts-ignore
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/listing/get-main-categories`, request);
    return response.data;
});
// Create the listing slice
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialListingState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMainCategories.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(getMainCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.status = 'fulfilled';
        })
        builder.addCase(getMainCategories.rejected, (state) => {
            state.status = 'rejected';
        });
    }

});

// Export action creators and reducer
export const listingActions = categoriesSlice.actions;
export default categoriesSlice.reducer;