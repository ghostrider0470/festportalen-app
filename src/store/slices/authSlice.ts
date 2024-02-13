// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    refeshToken: string | null;
    user: User | null;
}

interface User {
    name: string;
    email: string;
    to: boolean;
}
const initialAuthState: AuthState = {
    isAuthenticated: false,
    token: null,
    refeshToken: null,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.refeshToken = action.payload.refeshToken;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.refeshToken = null;
            state.user = null;
        },
    },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;