import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { Grid, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import useCrud from "../hooks/useCruds";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const { fetchData, dataCRUD, error, isLoading } = useCrud(
    [],
    `/rooms/${roomCode}`
  );

  const handleClick = () => {
    setShowTextField(true);
  };
  const handleSubmit = () => {
    fetchData();
  };
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (dataCRUD.length !== 0) {
      console.log(dataCRUD);
      navigate(`/room/${dataCRUD.room_code}`);
    }
  }, [dataCRUD, error]);
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
          <Button onClick={handleClick}>Join a Room</Button>
        </Grid>
        {showTextField && (
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Enter Code"
              variant="outlined"
              margin="normal"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              error={error}
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
