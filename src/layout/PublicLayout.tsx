import React from "react";
import Navbar from "../components/shared/navbar";
import {MenuItemLink} from "../components/shared/navbar/renderMenu.tsx";
import {Outlet} from "react-router-dom";

const linkItems: MenuItemLink[] = [
    {link: "/", text: "Layout.TopBar.Home"},
  { link: "Routes.Advertise", text: "Layout.TopBar.Advertise" },
  { link: "Routes.Contact", text: "Layout.TopBar.Contact" },
  { link: "Routes.Login", text: "Layout.TopBar.Login" },
    {link: "/listings", text: "Listings"},
];

const PublicLayout: React.FC = () => {
  return (
    <>
      <Navbar linkItems={linkItems} />
      <Outlet />
    </>
  );
};
export default PublicLayout;
