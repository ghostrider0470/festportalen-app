import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface Region {
    regionId: number;
    regionName: string;
    counties: County[];
    isSelected: boolean;
}

export interface County {
    countyId: number;
    countyName: string;
    isSelected: boolean;
}

export interface LocationsState {
    locations: Region[];
}

export const initialState: LocationsState = {
    locations: [],
}

export const getLocations = createAsyncThunk('locations/get', async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/listing/get-locations`);
    return response.data;
});

export const locationsSlice = createSlice({
    name: 'locations',
    initialState: initialState,
    reducers: {
        checkLocation: (state, action: PayloadAction<number>) => {
            state.locations.forEach((region) => {
                if (region.regionId === action.payload) {
                    region.isSelected = !region.isSelected;
                }

            });
        },
        checkCounty: (state, action: PayloadAction<{ locationId: number, countyId: number }>) => {
            state.locations.forEach((region) => {
                if (region.regionId === action.payload.locationId) {
                    region.counties.forEach((county) => {
                        if (county.countyId === action.payload.countyId) {
                            county.isSelected = !county.isSelected;
                        }
                    });
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getLocations.fulfilled, (state, action) => {

            const locations = action.payload;
            locations.forEach((region: Region) => {
                region.isSelected = false;
                region.counties.forEach((county: County) => {
                    county.isSelected = false;
                });
            });
            state.locations = locations;
        });
    }
});

export const locationsActions = locationsSlice.actions;
export default locationsSlice.reducer;