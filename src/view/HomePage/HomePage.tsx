import {Grid, Typography } from "@mui/material";
import HeroSection from "./sections/HeroSection";

const HomePage = () => {
  return (
    <>
      {/*<Container>*/}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HeroSection />
            <Typography variant="h1">I am h1 element</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">I am body1 element</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">I am body2 element</Typography>
          </Grid>
        </Grid>
      {/*</Container>*/}
    </>
  );
};

export default HomePage;
