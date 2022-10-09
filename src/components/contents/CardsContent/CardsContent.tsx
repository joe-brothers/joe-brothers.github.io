import { useEffect } from "react";
import { CardWithThumbnail } from "./CardWithThumbnail";
import type { CardWithThumbnailData } from "../../../types";
import { Container, Grid, Typography } from "@mui/material";

export const CardsContent = ({ pageTitle, cardsData }: { pageTitle: string; cardsData: CardWithThumbnailData }) => {
  useEffect(() => window.scroll({ top: 0 }), []);

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography align="center" variant="h4" mb={{ xs: 5, md: 8 }}>
        {pageTitle}
      </Typography>
      <Grid container spacing={{ xs: 3, md: 6 }} mx="auto">
        {cardsData.map((data) => (
          <Grid item xs={12} sm={6} md={4}>
            <CardWithThumbnail {...data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
