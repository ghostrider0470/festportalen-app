import { Grid } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";
import ServicesSection from "./sections/ServicesSection";

const HomePage = () => {
  return (
    <>
      {/*<Container>*/}
      <Grid
        container
        sx={{
          backgroundImage: "url(/public/images/banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Grid item xs={12} sx={{ backgroundColor: "rgb(78, 70, 58, 85%)" }}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <InfoSection />
        </Grid>
        <Grid item xs={12}>
          <ServicesSection />
        </Grid>
      </Grid>
      {/*</Container>*/}
    </>
  );
};

export default HomePage;
