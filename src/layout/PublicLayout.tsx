import React from "react";
import Navbar from "../components/shared/navbar";
import {MenuItemLink} from "../components/shared/navbar/renderMenu.tsx";
import {Outlet} from "react-router-dom";

const linkItems: MenuItemLink[] = [
    {link: 'Routes.Home', text: 'Layout.TopBar.Home'},
    {link: 'Routes.Advertise', text: 'Layout.TopBar.Advertise'},
    {link: 'Routes.Contact', text: 'Layout.TopBar.Contact'},
    {link: 'Routes.Login', text: 'Layout.TopBar.Login'},
    {link: 'Routes.Login', text: 'Layout.TopBar.Login'}
];


const PublicLayout: React.FC = () => {
    return (
        <div>
            <Navbar linkItems={linkItems}/>
            <Outlet/>
        </div>
    );
};
export default PublicLayout;