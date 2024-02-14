// Render a room page, which takes an id as a parameter, and can be accessed via a
// unique code or url using :id.
import { Link, useParams } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { useEffect, useState } from "react";
import useCrud from "../hooks/useCruds";
import { Box, Grid, Typography, Button } from "@mui/material";
import homeStyles from "../css/homeStyles.module.css";

const Room = () => {
  const { id } = useParams();
  const { fetchData } = useCrud([], `/current-song?room_code=${id}`);
  const [dataToShow, setDataToShow] = useState("...loading");

  const populateData = (code, data) => {
    if (code === 200) {
      console.log("song", data.song_name);
      return (
        <div>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h4" className={homeStyles.mainText}>
                Room
              </Typography>
              <Typography className={homeStyles.mainText}>
                Room Code: {id}
              </Typography>
            </Grid>
            <Box
              component="img"
              src={data.cover_art_url}
              sx={{ height: 150, width: 150 }}
            />
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h7" className={homeStyles.mainText}>
                Playing: {data.song_name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h7" className={homeStyles.mainText}>
                Artist: {data.artist_name}
              </Typography>
            </Grid>
          </Grid>
        </div>
      );
    }
    if (code === 204) {
      return <div>No songs currently being played</div>;
    }
    return <div>...error</div>;
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData();
      setDataToShow(populateData(res.status, res.data));
    };
    fetchDataAsync();
    // console.log("status", status);
  }, []);

  return (
    <>
      <Grid container spacing={2} direction="column">
        {dataToShow}
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={PathConstants.HOME}
          >
            HOME
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Room;
