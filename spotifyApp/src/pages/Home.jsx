import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { Grid, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <h1>Spotify App</h1>
      <Grid container spacing={2} direction="column" alignItems="center">
        <p>This is a Spotify App</p>
        <Grid item xs={12} sm={6} md={4}>
          <Link
            component="button"
            variant="body2"
            to={PathConstants.CREATE_ROOM}
          >
            CREATE A ROOM
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button>Join a Room</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
