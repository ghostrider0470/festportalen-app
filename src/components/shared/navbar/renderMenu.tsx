import { Button, Link, MenuItem, SxProps, Typography } from "@mui/material";
import * as React from "react";
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

export const NavItems: React.FC<NavItemsProps> = ({ items }) =>
  items.map((value, index) => (
    <Button
      href={value.link}
      key={index}
      sx={{
        my: 2,
        color: "white",
        display: "block",
      }}
    >
      {value.text}
    </Button>
  ));
export const MenuItems: React.FC<MenuItemsProps> = ({ items, handleClose }) =>
  items.map((value, index) => (
    <MenuItem key={index} onClick={handleClose}>
      <Link href={value.link} sx={{ flexGrow: 1 }}>
        <hr />
        <Typography textAlign="center">{value.text}</Typography>
      </Link>
    </MenuItem>
  ));
export default [NavItems, MenuItems];
