// src/store/slices/authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface AuthRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface AuthState {
    succeeded: boolean;
    token: string | null;
    user: User | null;
}

interface User {
    name: string;
    email: string;
}

const initialAuthState: AuthState = {
    succeeded: false,
    token: null,
    user: null,
};

const persistAuthState = (state: AuthState) => {
    sessionStorage.setItem('auth', JSON.stringify(state));
}

const resetAuthState = () => {
    return initialAuthState;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.succeeded = action.payload.succeeded;
            state.token = action.payload.token;
            persistAuthState(state);
            window.location.href = '/';
        },
        logout: (state) => {
            state = resetAuthState();
            persistAuthState(state);
            window.location.href = '/';
        },
    }
});

export default authSlice;

export const {login, logout} = authSlice.actions;