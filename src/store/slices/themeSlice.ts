// src/store/slices/themeSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ThemeState} from "../interfaces/theme.ts"; // Import the RootState from your store


const initialState: ThemeState = {
    mode: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.mode = action.payload;
        },

    },
});

export const {setTheme} = themeSlice.actions;

// Selector to get the theme from the state
export const selectTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;