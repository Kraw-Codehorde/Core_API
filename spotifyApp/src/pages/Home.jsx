import { Box, Grid, Button } from "@mui/material";
import homeStyles from "../css/homeStyles.module.css";

const Home = () => {
  return (
    <Box className={homeStyles.homePageContainer}>
      <h1>Spotify App</h1>

      <Grid container spacing={2} direction="column" alignItems="center">
        <p>This is a Spotify App</p>
        <Grid item xs={12} sm={6} md={4}>
          <Button>Create your own Room</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button>Join a Room</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
