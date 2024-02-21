import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {AuthState, logout} from '../store/slices/authSlice';


/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated(): boolean {
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