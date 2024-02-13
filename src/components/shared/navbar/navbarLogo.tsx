import * as React from "react";

import {Box, SxProps} from "@mui/material";

interface NavbarLogoProps {
    src?: string;
    sx?: SxProps | undefined;
    alt?: string;
}

const NavbarLogo: React.FC<NavbarLogoProps> = (props) => {
    return (
        <Box sx={props.sx}>
            <img height={'100%'} src={props.src} alt={props.alt}/>
        </Box>
    )
}
export default NavbarLogo;