import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {useIsAuthenticated} from "../hooks/auth.ts";

const RouteProvider: React.FC = () => {

    const privateRoutes = createBrowserRouter([]);

    const publicRoutes = createBrowserRouter([]);

    const isAuthenticated = useIsAuthenticated();
    console.info('isAuthenticated:', isAuthenticated);

    var router = isAuthenticated ? privateRoutes : publicRoutes;

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
export default RouteProvider;