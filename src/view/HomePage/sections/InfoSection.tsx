import { Box, Grid, Typography } from "@mui/material";

const InfoSection = () => {
  return (
    <Grid container sx={{ backgroundColor: "#111", padding: "3%" }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography>
          <img width={450} src="/public/images/food.jpg" alt="Food Image" />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box>
          <Typography variant="h6" color="primary">
            Hos oss finner du
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="h4" color="primary">
            Den perfekte leverandøren
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" color="white">
            Skal du arrangere fest, selskap, bursdag eller lignende så finner du
            mange gode leverandører hos oss.
          </Typography>
          <Typography variant="body1" color="white">
            På festportalen finner du noe til enhver anledning!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default InfoSection;
