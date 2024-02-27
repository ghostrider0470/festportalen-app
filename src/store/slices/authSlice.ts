// src/store/slices/authSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import {AxiosResponse} from "axios";
import {persistAuthState, resetAuthState} from "../../hooks/auth.ts";


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

export interface User {
    userId: string;
    personId: number;
    email: string;
    firstName: string;
    lastName: string;
    profileImage: string;
}

export const initialAuthState: AuthState = {
    succeeded: false, token: null, user: null,
};


export const loginAsync = createAsyncThunk('auth/loginAsync', async (authRequest: AuthRequest) => {
    const response = await axios.post<AuthRequest, AxiosResponse<AuthState>>(`${import.meta.env.VITE_API_URL}/auth/login`, authRequest);
    return response.data as AuthState;
});
export const getMe = createAsyncThunk('auth/getMe', async () => {
    const response = await axios.get<AuthRequest, AxiosResponse<User>>(`${import.meta.env.VITE_API_URL}/users/me`);
    return response.data as User;
});

export const authSlice = createSlice({
    name: 'auth', initialState: initialAuthState, reducers: {
        logout: (state) => {
            state = resetAuthState();
            persistAuthState(state);
            window.location.href = '/';
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.succeeded = action.payload.succeeded;
                state.token = action.payload.token;
                state.user = action.payload.user;
                persistAuthState(state);
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload;
                persistAuthState(state);
                // console.log(state);
                // window.location.href = '/';
            });
    }
});

export default authSlice;

export const {logout} = authSlice.actions;