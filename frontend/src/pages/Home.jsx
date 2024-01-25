import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ListProjects from "../components/ListProjects";
import axios from "axios";
import { useState } from "react";
import useAxiosWithInterceptor from "../helpers/jwtinterceptor";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const jwtAxios = useAxiosWithInterceptor();

  useEffect(() => {
    jwtAxios
      .get("http://localhost:8000/api/projects/")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid>
      <Box sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4">John Doe</Typography>
          <Typography>Software Engineer</Typography>
        </Box>

        {/* About section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5">About</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisl, eu
            aliquam nisl nisl eu nisl.
          </Typography>
        </Box>

        {/* Projects section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5">Projects</Typography>

          <Grid container spacing={2}>
            <ListProjects projects={projects} />
          </Grid>
        </Box>

        {/* Contact button */}
        <Button variant="contained">Contact</Button>
      </Box>
    </Grid>
  );
};

export default Home;
