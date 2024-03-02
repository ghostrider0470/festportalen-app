// src/store/slices/authSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {ListingRequest, ListingState} from "../interfaces/listing.ts";


export const initialListingState: ListingState = {
    resultCount: 0, page: 0, totalPages: 0, resultList: [],
}

// Define the async thunk action
export const fetchListings = createAsyncThunk('listing/fetchListings', async (request: ListingRequest) => {
    const response = await axios.post<ListingRequest, {
        data: ListingState
    }>(`${import.meta.env.VITE_API_URL}/listing/search-by`, request);
    return response.data;
});
// export const getMainCategories = createAsyncThunk('listing/get-main-categories', async (request: ListingRequest) => {
//     const response = await axios.post<ListingRequest, {
//         data: ListingState
//     }>(`${import.meta.env.VITE_API_URL}/listing/get-main-categories`, request);
//     return response.data;
// });
// Create the listing slice
export const listingSlice = createSlice({
    name: 'listing',
    initialState: initialListingState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                // Optionally, you can update the state to indicate that the request is pending
                console.log(state)
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.resultList = action.payload.resultList;
                state.resultCount = action.payload.resultCount;
                state.page = action.payload.page;
                state.totalPages = action.payload.totalPages;
            });
        // .addCase(fetchListings.rejected, (state, action) => {
        //     // Optionally, you can update the state to indicate that the request failed
        //     console.log(state)
        // });
    }
});

// Export action creators and reducer
export const listingActions = listingSlice.actions;
export default listingSlice.reducer;