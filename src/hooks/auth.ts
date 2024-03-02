import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {initialAuthState, logout} from '../store/slices/authSlice';
import {AuthState} from "../store/interfaces/auth.ts";


/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export const useIsAuthenticated = (): boolean => {
    const auth = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth') as string) : {
        succeeded: false,
        token: null,
        user: null
    };
    return auth.succeeded;
}

export function useAuth(): AuthState {
    return sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth') as string) : {
        succeeded: false,
        token: null,
        user: null
    };
}

export const persistAuthState = (state: AuthState) => {
    sessionStorage.setItem('auth', JSON.stringify(state));
}

export const resetAuthState = () => {
    return initialAuthState;
};

/**
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */
export function useEventLogout(): () => void {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(logout());
    }, [dispatch]);
}