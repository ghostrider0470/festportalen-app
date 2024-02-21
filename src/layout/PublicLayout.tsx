import React from "react";
import Navbar from "../components/shared/navbar";
import {MenuItemLink} from "../components/shared/navbar/renderMenu.tsx";
import {Outlet} from "react-router-dom";

const pages: MenuItemLink[] = [
    {link: "home", text: "Home"},
    {link: "pricing", text: "Pricing"},
    {link: "blog", text: "Blog"},
];

const PublicLayout: React.FC = () => {
    return (
        <div>
            <Navbar pages={pages}/>
            <Outlet/>
        </div>
    );
};
export default PublicLayout;