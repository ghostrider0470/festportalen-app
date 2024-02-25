// src/store/slices/authSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";


export interface ListingRequest {
    category: string;
    subCategories: string[];
    regions: string[];
    counties: string[];
    keyword: string[];
    page: number;
    pageSize: number;
    sortBy: string;
}

export interface ListingState {
    resultCount: number;
    page: number;
    totalPages: number;
    resultList: Listing[];
}

export interface Listing {
    advertisementId: number;
    dateCreated: Date;
    title?: string;
    averageRating?: number;
    shortDescription?: string;
    description?: string;
    postalCity?: string;
    region?: string;
    companyLogo?: string;
    categoryId: number;
    categoryIcon?: string;
    categoryName?: string;
    advertisementCoverImage?: string;
    firstGalleryImage?: string;
    companyId: number;
    companyName?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    youTubeUrl?: string;
    priceRange: number;
    priceFrom?: number;
    clicks: number;
    cols: number;
    type?: string;
    guid?: string;
    isActive: boolean;
    isDraft: boolean;
    isRejected: boolean;
    isApproved: boolean;
    countAdvertisementClicks: number;
    countPhoneClicks: number;
    countMesasges: number;
    countLinkClicks: number;
    countAdvertisementFavorite: number;
}

export const initialListingState: ListingState = {
    resultCount: 0, page: 0, totalPages: 0, resultList: [],
}

// Define the async thunk action
export const fetchListings = createAsyncThunk('listing/fetchListings', async (request: ListingRequest) => {
    const response = await axios.post<ListingRequest, {
        data: ListingState
    }>('http://localhost:5272/api/Search/search-by', request);
    return response.data;
});

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
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .addCase(fetchListings.rejected, (state) => {
                // Optionally, you can handle the error state here
                console.log(state)
            });
    },
});

// Export action creators and reducer
export const listingActions = listingSlice.actions;
export default listingSlice.reducer;