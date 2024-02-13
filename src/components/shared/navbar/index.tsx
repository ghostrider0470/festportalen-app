import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Button,
    Tooltip,
    Avatar,
    Container
} from '@mui/material';
import logo from '../../../../public/images/logo.png'
import Index from "./mobile-navbar";
import NavbarLogo from "./navbarLogo.tsx";


const pages = ['Products', 'Pricing', 'Blog'];


const Navbar: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);

    const MenuItems = ({items, handleClose}: { items: string[], handleClose: () => void }) => (
        items.map((item) => (
            <MenuItem key={item} onClick={handleClose}>
                <Typography textAlign="center">{item}</Typography>
            </MenuItem>
        ))
    );
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <AppBar sx={{minHeight: '80px', justifyContent: 'center', position: 'static'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/*LOGO*/}
                    <NavbarLogo
                        src={logo}
                        sx={{
                            marginLeft: '7%',
                            padding: '0px 5px 5px 5px',
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}/>

                    <Index/>

                    <Box sx={{ml: 5, flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block'
                                }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/*<Box sx={{*/}
                    {/*    flexGrow: 0,*/}
                    {/*    display: {*/}
                    {/*        xs: 'none',*/}
                    {/*        md: 'flex'*/}
                    {/*    }}*/}
                    {/*}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu sx={{mt: '45px'}} id="menu-appbar" anchorEl={anchorElUser}*/}
                    {/*          anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted*/}
                    {/*          transformOrigin={{vertical: 'top', horizontal: 'right'}} open={Boolean(anchorElUser)}*/}
                    {/*          onClose={handleCloseUserMenu}>*/}
                    {/*        <MenuItems items={settings} handleClose={handleCloseUserMenu}/>*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;