import { Box, Grid, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <img src="/public/images/logo.png" alt="logo" />
        <Typography mt={1} variant="h5" color="primary">
          Noe til enhver anledning!
        </Typography>
      </Box>
      <Box mt={2}>
        <input type="text" className="search-input"></input>
        <Box m={5}>kategorije</Box>
      </Box>
    </Grid>
  );
};

export default HeroSection;
