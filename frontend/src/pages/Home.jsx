import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ListProjects from "../components/ListProjects";
import { useState } from "react";
import useAxiosWithInterceptor from "../helpers/jwtinterceptor";
import useCrud from "../hooks/useCruds";

const Home = () => {
  const { fetchData, dataCRUD, error, isLoading } = useCrud([], "/projects");

  useEffect(() => {
    fetchData();
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
            <ListProjects projects={dataCRUD} />
          </Grid>
        </Box>

        {/* Contact button */}
        <Button variant="contained">Contact</Button>
      </Box>
    </Grid>
  );
};

export default Home;
