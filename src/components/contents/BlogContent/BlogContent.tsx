import { Container, Typography } from "@mui/material";

export const BlogContent = () => {
  window.scroll({ top: 0 });

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography align="center" variant="h2">
        Blog
      </Typography>
    </Container>
  );
};
