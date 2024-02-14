import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { Grid, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useCrud from "../hooks/useCruds";
import { useNavigate } from "react-router-dom";
import homeStyles from "../css/homeStyles.module.css";

const Home = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [roomCode, setRoomCode] = useState("");
  const [validationError, setValidationError] = useState(false);
  const navigate = useNavigate();
  const { fetchData, dataCRUD, error, isLoading } = useCrud(
    [],
    `/rooms/${roomCode}`
  );

  const handleClick = () => {
    setShowTextField(true);
  };
  const handleSubmit = () => {
    if (roomCode.length > 0) {
      fetchData();
    } else {
      setValidationError(true);
    }
  };
  useEffect(() => {
    if (error) {
      setValidationError(true);
    }
    if (dataCRUD.length !== 0) {
      console.log("data", dataCRUD);
      navigate(`/room/${dataCRUD.room_code}`);
    }
  }, [dataCRUD, error]);
  return (
    <>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h3"
            align="center"
            className={homeStyles.mainText}
          >
            Spotify App
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" className={homeStyles.mainText}>
            This is a Spotify App!
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Button
              className={homeStyles.mainButton}
              variant="contained"
              component={Link}
              to={PathConstants.CREATE_ROOM}
            >
              CREATE A ROOM
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button onClick={handleClick} variant="contained" color="error">
              Join a Room
            </Button>
          </Grid>
        </Grid>
        {showTextField && (
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Enter Code"
              variant="outlined"
              margin="normal"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              error={validationError}
              helperText={error ? "Invalid Code" : ""}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "#333333",
                      color: "#FFFFFF",
                    }}
                  >
                    Join
                  </Button>
                ),
              }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Home;
