import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

export const First = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={{xs: 5, sm: 10}} px={{xs: 2, sm: 3}}>
      <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3}}>
        <Typography variant='h3' sx={{fontWeight: 500}}>Lorem ipsum dolor sit amet.</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis laboriosam nemo impedit sit, nisi sunt iste unde ad, et dignissimos, totam eaque ullam voluptate voluptatem veritatis perferendis soluta harum!</Typography>
        <Button onClick={() => navigate('/games')} variant="contained" style={{width: 100, borderRadius: 30}}>Click</Button>
      </Grid>
      <Grid item xs={12} sm={6} style={{display: "flex"}}>
        <img src="/assets/illustration4.png" style={{display: "block", margin: "auto", width: "100%", maxWidth: 600}}/>
      </Grid>
    </Grid>
  )
};