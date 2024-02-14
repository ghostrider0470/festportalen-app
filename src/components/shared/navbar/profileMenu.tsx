import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import React from "react";


export const ProfileMenu: React.FC = () => {

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const MenuItems = ({items, handleClose}: { items: string[], handleClose: () => void }) => (
        items.map((item) => (
            <MenuItem key={item} onClick={handleClose}>
                <Typography textAlign="center">{item}</Typography>
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
            }}
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
                <MenuItems items={settings} handleClose={handleCloseUserMenu}/>
            </Menu>
        </Box>
    )
};