import * as React from "react";
import { AppBar, Box, Toolbar, Container } from "@mui/material";
import logo from "../../../../public/images/logo.png";
import MobileNavbar from "./mobileNavbar.tsx";
import NavbarLogo from "./navbarLogo.tsx";
import { ProfileMenu } from "./profileMenu.tsx";
import { MenuItemLink, NavItems } from "./renderMenu.tsx";
import { useIsAuthenticated } from "../../../hooks/auth.ts";
// import {ProfileMenu} from "./profileMenu.tsx";

const logoProps = {
  src: logo,
  alt: "logo",
  sx: {
    marginLeft: "7%",
    padding: "0px 5px 5px 5px",
    display: {
      xs: "none",
      md: "flex",
    },
  },
};

export interface NavbarProps {
  linkItems: MenuItemLink[];
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const isAuth = useIsAuthenticated();
  return (
    <AppBar
      sx={{
        minHeight: "80px",
        justifyContent: "center",
        position: "sticky",
        display: { sx: "flex" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*LOGO*/}
          <NavbarLogo logoProps={logoProps} />

          <MobileNavbar items={props.linkItems} />

          <Box sx={{ ml: 5, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavItems items={props.linkItems} />
          </Box>
          {isAuth && <ProfileMenu />}
          {/*<ProfileMenu/>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
