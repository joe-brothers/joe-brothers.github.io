import React from 'react';
import {AppBar, Box, Button, Container, Divider, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';

export const First = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant='h3' sx={{fontWeight: 500}}>Lorem ipsum dolor sit amet.</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis laboriosam nemo impedit sit, nisi sunt iste unde ad, et dignissimos, totam eaque ullam voluptate voluptatem veritatis perferendis soluta harum!</Typography>
        <Button variant="contained">Click</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Grid>
    </Grid>
  )
};