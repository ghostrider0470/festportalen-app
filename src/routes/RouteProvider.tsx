import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useIsAuthenticated} from "../hooks/auth.ts";
import PublicLayout from "../layout/PublicLayout.tsx";
import LoginPage from "../view/LoginPage";
import HomePage from "../view/HomePage/HomePage.tsx";
import PrivateLayout from "../layout/PrivateLayout.tsx";
import ListingsPage from "../view/ListingsPage";
import ListingItemPage from "../view/ListingsPage/item";


const RouteProvider: React.FC = () => {
    // const auth = useAuth();
    // // Define private routes for authenticated users

    // useEffect(() => {
    //     console.info('authSlice:', auth);
    // }, [auth]);

    const isAuthenticated = useIsAuthenticated();
    console.info('isAuthenticated:', isAuthenticated);

    if (!isAuthenticated) {
        const publicRoutes = createBrowserRouter([
            {
                path: "/",
                element: <PublicLayout/>,
                children: [
                    {path: '/', element: <HomePage/>, index: true},
                    {path: '/login', element: <LoginPage/>},
                    {path: '/listings/*', element: <ListingsPage/>},
                    {path: '/listing/*', element: <ListingItemPage/>},
                ],
            },
        ]);
        return (<>
            <RouterProvider router={publicRoutes}/>
        </>);
    } else if (isAuthenticated) {
        const privateRoutes = createBrowserRouter([
            {
                path: "/",
                element: <PrivateLayout/>,
                children: [
                    {path: '/', element: <HomePage/>, index: true},
                    {path: '/login', element: <LoginPage/>},
                    {path: '/listings/*', element: <ListingsPage/>},
                    {path: '/listing/*', element: <ListingItemPage/>},
                ],
            },

        ]);
        return (<>
            <RouterProvider router={privateRoutes}/>
        </>);

    }
}
export default RouteProvider;