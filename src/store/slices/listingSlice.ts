// src/store/slices/authSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {ListingItem, ListingState} from "../interfaces/listing.ts";
import {FilterState} from "../interfaces/filter.ts";


export const initialListingState: ListingState = {
    selectedListing: null,
    status: 'pending',
    resultCount: 0, page: 0, totalPages: 0, resultList: [],
}

// Define the async thunk action
export const fetchListings = createAsyncThunk('listing/fetchListings', async (request: FilterState) => {
    const response = await axios.post<FilterState, {
        data: ListingState
    }>(`${import.meta.env.VITE_API_URL}/listing/search-by`, request);
    return response.data;
});
export const getListingById = createAsyncThunk('listing/get-listing-by-id', async (id: string) => {
    const response = await axios.get<FilterState, {
        data: ListingItem
    }>(`${import.meta.env.VITE_API_URL}/listing/get-listing/${id}`);
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
                state.status = 'pending';
                console.log(state)
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.resultList = action.payload.resultList;
                state.resultCount = action.payload.resultCount;
                state.page = action.payload.page;
                state.totalPages = action.payload.totalPages;
            });
        builder
            .addCase(getListingById.pending, (state) => {
                state.status = 'pending';
                console.log(state)
            })
            .addCase(getListingById.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                console.log("Action", action.payload);
                state.selectedListing = {
                    coverImage: action.payload.coverImage,
                    title: action.payload.title,
                    companyPhoto: action.payload.companyPhoto,
                    description: action.payload.description,
                    links: action.payload.links,
                    tags: action.payload.tags,
                    contactPerson: action.payload.contactPerson,
                    companyName: action.payload.companyName,
                    phoneNumber: action.payload.phoneNumber,
                    price: action.payload.price
                };

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