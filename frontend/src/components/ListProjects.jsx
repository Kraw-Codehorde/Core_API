import React from "react";
import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";

const ListProjects = (props) => {
  const { projects } = props;

  return (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Box sx={{ p: 2 }}>{project.name}</Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListProjects;
