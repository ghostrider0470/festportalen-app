import React from "react";
import Navbar from "../components/shared/navbar";
import {MenuItemLink} from "../components/shared/navbar/renderMenu.tsx";

const pages: MenuItemLink[] = [
    {link: 'home', text: 'Home'},
    {link: 'pricing', text: 'Pricing'},
    {link: 'blog', text: 'Blog'}
];

const PublicLayout: React.FC = () => {
    return (
        <div>
            <Navbar pages={pages}/>
        </div>
    );
}
export default PublicLayout;