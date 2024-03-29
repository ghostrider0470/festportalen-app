import { Box, SxProps } from "@mui/material";

interface NavbarLogoProps {
  src?: string;
  sx?: SxProps | undefined;
  alt?: string;
}

const NavbarLogo = (props: { logoProps: NavbarLogoProps }) => {
  return (
    <Box sx={props.logoProps.sx}>
      <img width={250} src={props.logoProps.src} alt={props.logoProps.alt} />
    </Box>
  );
};
export default NavbarLogo;
