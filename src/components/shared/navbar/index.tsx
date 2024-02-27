import * as React from "react";
import {AppBar, Box, Container, Stack, Toolbar, Typography} from "@mui/material";
import logo from "../../../../public/images/logo.png";
import MobileNavbar from "./mobileNavbar.tsx";
import NavbarLogo from "./navbarLogo.tsx";
import {ProfileMenu} from "./profileMenu.tsx";
import {MenuItemLink, NavItems} from "./renderMenu.tsx";
import {useIsAuthenticated} from "../../../hooks/auth.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
// import {ProfileMenu} from "./profileMenu.tsx";

const logoProps = {
    src: logo, alt: "logo", sx: {
        marginLeft: "7%", padding: "0px 5px 5px 5px", display: {
            xs: "none", md: "flex",
        },
    },
};

export interface NavbarProps {
    linkItems: MenuItemLink[];
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const auth = useSelector((state: RootState) => state.auth);
    const isAuth = useIsAuthenticated();
    return (<AppBar
        sx={{
            minHeight: "80px", justifyContent: "center", position: "sticky", display: {sx: "flex"},
        }}
    >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                {/*LOGO*/}
                <NavbarLogo logoProps={logoProps}/>

                <MobileNavbar items={props.linkItems}/>

                <Box sx={{ml: 5, flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                    <NavItems items={props.linkItems}/>
                </Box>
                {isAuth && <Stack direction='row' sx={{justifyContent: "center", alignItems: "center"}} spacing={2}>
                    <Typography variant='h6'>Welcome {auth.user?.firstName}</Typography>
                    <ProfileMenu/>
                </Stack>}
                {/*<ProfileMenu/>*/}
            </Toolbar>
        </Container>
    </AppBar>);
};
export default Navbar;
