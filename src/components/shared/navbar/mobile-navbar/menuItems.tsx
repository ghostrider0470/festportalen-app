import {Link, MenuItem, Typography} from "@mui/material";
import * as React from "react";


export interface MenuItemLink {
    link: string;
    text: string;
};

export interface MenuItemsProps {
    items: MenuItemLink[];
    handleClose: () => void;
};
/**
 * A functional component that maps an array of MenuItemLink objects to MenuItem components.
 * Each MenuItem contains a Link component that navigates to the URL specified in the corresponding MenuItemLink object.
 * The handleClose function is called when a MenuItem is clicked.
 *
 * @param {MenuItemsProps} props - The properties passed to the component.
 * @returns {JSX.Element} A mapped array of MenuItem components.
 */
const MenuItems: React.FC<MenuItemsProps> = ({items, handleClose}) => (
    items.map((value, index) => (
        <MenuItem key={index} onClick={handleClose}>
            <Link href={value.link} sx={{flexGrow: 1}}>
                <hr/>
                <Typography textAlign="center">{value.text}</Typography>
            </Link>

        </MenuItem>
    ))
);
export default MenuItems;