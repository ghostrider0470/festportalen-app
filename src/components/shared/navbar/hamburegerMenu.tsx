import {Box, IconButton, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import * as React from "react";
import {MenuItemLink, MenuItems} from "./renderMenu.tsx";

export interface HamburegerMenuProps {
    pages: MenuItemLink[];
}

const HamburegerMenu: React.FC<HamburegerMenuProps> = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <Box sx={{
            flexGrow: 1,
            display: {
                xs: 'flex',
                md: 'none',
                justifyContent: 'center'
            }
        }}>
            <IconButton
                size='large'
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon sx={{
                    fontSize: '50px'
                }}/>
            </IconButton>
            <Menu id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  slotProps={{
                      paper: {
                          sx: {
                              width: '100%'
                          }
                      }
                  }}
                  sx={{
                      flexGrow: 1,
                      display: {
                          xs: 'block',
                          md: 'none'
                      }
                  }}>
                <MenuItems
                    items={props.pages}
                    handleClose={handleCloseNavMenu}
                />
            </Menu>
        </Box>
    );
}
export default HamburegerMenu;