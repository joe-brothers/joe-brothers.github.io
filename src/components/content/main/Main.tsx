import React from 'react';
import {Container, Divider, Link, styled, Typography} from '@mui/material';
import { First } from './First';
import { Logos } from './Logos';
import { LinkWithArrow } from '../../LinkWithArrow';
import { ProductWithImage } from './ProductWithImage';
import { Products } from './Products';
import { PercentageCards } from './PercentageCards';
import { Quotes } from './Quotes';
import { CardWithButton } from './CardWithButton';

export const Main = () => {
  return (
    <Container maxWidth="lg" sx={{pt: {xs: 11, md: 15}}}>
      <First />
      <Divider sx={{marginY: 5}} />
      <Logos />
      <Divider sx={{marginY: 5}} />
      <Container style={{textAlign: 'center'}}>
        <Typography variant="h3" align="center" mb={5}>Build experiences that drive engagement and increase transactions</Typography>
        <LinkWithArrow text="Watch a video" onClick={() => console.log('clicked')} />
      </Container>
      <Divider sx={{marginY: 5}} />
      <Products />
      <PercentageCards />
      <Quotes />
      <CardWithButton
        textFirst="Ready for"
        textSecond="the next level?"
        textButtonFirst="Talk to Sales"
        textButtonSecond="Start a free trial"
      />
    </Container>
  )
};