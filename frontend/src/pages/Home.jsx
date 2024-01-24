import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ListProjects from "../components/ListProjects";

const mockProjects = [{
    id: 1,
    name: "Project 1",
    description: "Project 1 description",
    image: "https://picsum.photos/id/1015/200/300",
    link: "https://project1.com",
    github: "https://github.com/project1"
    },
    {id: 2,
    name: "Project 2",
    description: "Project 2 description",
    image: "https://picsum.photos/id/1015/200/300",
    link: "https://project2.com",
    github: "https://github.com/project2"
    },
    {
        id: 3,
        name: "Project 3",
        description: "Project 3 description",
        image: "https://picsum.photos/id/1015/200/300",
        link: "https://project3.com",
        github: "https://github.com/project3"
    }
]

const Home = () => {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisl, 
          eu aliquam nisl nisl eu nisl.
        </Typography>
      </Box>

      
      

{/* Projects section */}
<Box sx={{ mb: 4 }}>
  <Typography variant="h5">Projects</Typography>

  <Grid container spacing={2}> 
    <ListProjects projects={mockProjects} />
  </Grid>
</Box>



      
      {/* Contact button */}
      <Button variant="contained">Contact</Button>
    </Box>
    </Grid>
  );
};

export default Home;
