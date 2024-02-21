import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";

import {logout} from "../../../store/slices/authSlice";


export const ProfileMenu: React.FC = () => {
    const dispatch = useDispatch();
    // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const settings: { name: string, action: () => void }[] = [
        {
            name: 'Profile',
            action: () => {
                setAnchorElUser(null);
                console.log('Profile');
            }
        },
        {
            name: 'Account',
            action: () => {
                setAnchorElUser(null);
                console.log('Account');
            }
        },
        {
            name: 'Dashboard',
            action: () => {
                setAnchorElUser(null);
                console.log('Dashboard');
            }
        },
        {
            name: 'Logout',
            action: () => {
                setAnchorElUser(null);
                dispatch(logout());
            }
        }
    ];
    const MenuItems = ({items}: { items: { name: string, action: () => void }[] }) => (
        items.map((item) => (
            <MenuItem key={item.name} onClick={item.action}>
                <Typography textAlign="center">{item.name}</Typography>
            </MenuItem>
        ))
    );
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    return (
        <Box sx={{
            flexGrow: 0,
            display: {
                xs: 'none',
                md: 'flex'
            }
        }
        }>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu sx={{mt: '45px'}} id="menu-appbar" anchorEl={anchorElUser}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted
                  transformOrigin={{vertical: 'top', horizontal: 'right'}} open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                <MenuItems items={settings} />
            </Menu>
        </Box>
    )
};