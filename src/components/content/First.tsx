import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

export const First = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3}}>
        <Typography variant='h3' sx={{fontWeight: 500}}>Lorem ipsum dolor sit amet.</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis laboriosam nemo impedit sit, nisi sunt iste unde ad, et dignissimos, totam eaque ullam voluptate voluptatem veritatis perferendis soluta harum!</Typography>
        <Button variant="contained" style={{width: 100, borderRadius: 30}}>Click</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="/assets/cassette.jpg" style={{display: "block", margin: "auto", width: "100%", maxWidth: 600}}/>
      </Grid>
    </Grid>
  )
};