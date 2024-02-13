import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {logout} from '../store/slices/authSlice';

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated(): boolean {
    return useSelector((state: RootState) => state.user.isAuthenticated);
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