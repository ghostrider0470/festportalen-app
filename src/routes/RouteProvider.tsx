import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {useIsAuthenticated} from "../hooks/auth.ts";
import PublicLayout from "../layout/PublicLayout.tsx";

const RouteProvider: React.FC = () => {

    const privateRoutes = createBrowserRouter([
        {
            path: "/",
            element: <div>Private</div>,
        },
    ]);

    const publicRoutes = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
        },

    ]);

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