import React, {useEffect} from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useAuth, useIsAuthenticated} from "../hooks/auth.ts";
import PublicLayout from "../layout/PublicLayout.tsx";
import LoginPage from "../view/LoginPage/LoginPage.tsx";
import HomePage from "../view/HomePage/HomePage.tsx";
import PrivateLayout from "../layout/PrivateLayout.tsx";
import i18next from "../i18next.ts";



const RouteProvider: React.FC = () => {
    const auth = useAuth();
    // // Define private routes for authenticated users

    useEffect(() => {
        console.info('authSlice:', auth);
    }, [auth]);

    // const router = isAuthenticated ? privateRoutes : publicRoutes;
    const privateRoutes = createBrowserRouter([
        {
            path: "/",
            element: <PrivateLayout/>,
            children: [
                {path: i18next.t(('Routes.Home')), element: <HomePage/>, index: true},
                {path: i18next.t(('Routes.Login')), element: <LoginPage/>},
            ],
        },

    ]);

    const publicRoutes = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
            children: [
                {path: i18next.t(('Routes.Home')), element: <HomePage/>, index: true},
                {path: i18next.t(('Routes.Login')), element: <LoginPage/>},
            ],
        },
    ]);

    const isAuthenticated = useIsAuthenticated();
    console.info('isAuthenticated:', isAuthenticated);

    const router = isAuthenticated ? privateRoutes : publicRoutes;

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}
export default RouteProvider;