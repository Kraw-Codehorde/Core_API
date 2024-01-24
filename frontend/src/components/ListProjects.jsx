import { Grid } from '@mui/material'
import React from 'react'

const ListProjects = (props) => {
    const { projects } = props

  return (
    <Grid container spacing={2}>
        {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id} />
        ))}
    </Grid>
  )
}

export default ListProjects