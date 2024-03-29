import { Box, IconButton, Menu, Stack } from "@mui/material";
import logo from "../../../../public/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { MenuItemLink, MenuItems } from "./renderMenu.tsx";

interface MobileNavbarProps {
  items: MenuItemLink[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <Stack sx={{ flexGrow: 1, flexDirection: "row" }}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height={"80%"} src={logo} alt={"logo"} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none",
              justifyContent: "center",
            },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            slotProps={{
              paper: {
                sx: {
                  width: "100%",
                },
              },
            }}
            sx={{
              flexGrow: 1,
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <MenuItems items={props.items} handleClose={handleCloseNavMenu} />
          </Menu>
        </Box>
      </Stack>

      {/*<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>*/}
      {/*    {pages.map((page) => (*/}
      {/*        <Button key={page} onClick={handleCloseNavMenu}*/}
      {/*                sx={{my: 2, color: 'white', display: 'block'}}>{page}</Button>*/}
      {/*    ))}*/}
      {/*</Box>*/}
    </Box>
  );
};
export default MobileNavbar;
