import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";

export const First = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={{ xs: 5, sm: 10 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 500 }}>
            We make apps
          </Typography>
          <Typography>We are Joe Brothers, makes fun and useful apps and games</Typography>
          <Button onClick={() => navigate("/games")} variant="contained" style={{ width: 100, borderRadius: 30 }}>
            Click
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: "flex" }}>
          <img
            src="/assets/illustration4.png"
            style={{ display: "block", margin: "auto", width: "100%", maxWidth: 600 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
