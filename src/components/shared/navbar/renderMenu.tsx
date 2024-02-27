import {Button, Link, MenuItem, SxProps, Typography} from "@mui/material";
import * as React from "react";
import i18next from '../../../utils/i18next.ts';

export interface MenuItemLink {
    link: string;
    text: string;
}

export interface MenuItemsProps {
    items: MenuItemLink[];
    handleClose: () => void;
}

export interface MenuItemProps {
    pages: string[];
    childSx?: SxProps | undefined;
    sx?: SxProps | undefined;
}

export interface NavItemsProps {
    items: MenuItemLink[];
}

export const NavItems: React.FC<NavItemsProps> = ({items}) =>
    items.map((item, index) => (
        <Button
            href={i18next.t((item.link))}
            key={index}
            sx={{
                my: 2,
                color: "white",
                display: "block",
            }}
        >
            {i18next.t((item.text))}
        </Button>
    ));
export const MenuItems: React.FC<MenuItemsProps> = ({items, handleClose}) =>
    items.map((item, index) => (
        <MenuItem key={index} onClick={handleClose}>
            <Link href={i18next.t((item.link))} sx={{flexGrow: 1}}>
                <hr/>
                <Typography textAlign="center">{i18next.t((item.text))}</Typography>
            </Link>
        </MenuItem>
    ));
export default [NavItems, MenuItems];
