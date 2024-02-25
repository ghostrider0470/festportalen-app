// src/store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {themeSlice} from "./slices/themeSlice.ts";
import {authSlice} from "./slices/authSlice.ts";
import {listingSlice} from "./slices/listingSlice.ts";

export const store = configureStore({
    reducer: {
        // Add the reducer to the store on the `theme` key
        theme: themeSlice.reducer,
        auth: authSlice.reducer,
        listing: listingSlice.reducer,
    },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;