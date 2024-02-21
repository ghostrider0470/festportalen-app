import {Box, Container, Typography} from "@mui/material";

const HeroSection = () => {
    return (
        <Container sx={{background:'yellow'}}>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <img src="/public/images/logo.png" alt="logo" />
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography variant="h5">Noe til enhver anledning!</Typography>
            </Box>
            <Box>input goes here</Box>
        </Container>
    );
};

export default HeroSection;