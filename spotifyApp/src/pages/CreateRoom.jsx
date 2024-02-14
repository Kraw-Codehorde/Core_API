import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import RoomEdit from "../components/RoomEdit";
import useCrud from "../hooks/useCruds";
import { Button, Grid, Typography } from "@mui/material";
import homeStyles from "../css/homeStyles.module.css";

const CreateRoom = () => {
  const { fetchData, dataCRUD, error, isLoading } = useCrud([], "/rooms");

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h4"
            align="center"
            className={homeStyles.mainText}
          >
            Create your Room!{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RoomEdit create />
        </Grid>
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

export default CreateRoom;
