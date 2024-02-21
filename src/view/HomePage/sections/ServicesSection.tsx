import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ServicesSection = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: "url(/public/images/banner.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "80vh",
      }}
    >
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          backgroundColor: "rgb(224, 174, 85, 75%)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">MEST POPULÆRE ANNONSØRER</Typography>
        <Card sx={{ maxWidth: 345, mt: 5 }}>
          <CardMedia image="/static/images/cards/contemplative-reptile.jpg">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardMedia>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}></Grid>
    </Grid>
  );
};

export default ServicesSection;
