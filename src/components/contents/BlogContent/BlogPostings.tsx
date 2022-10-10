import { Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const BlogPostings = () => {
  window.scroll({ top: 0 });
  const { category } = useParams();

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography>{category}</Typography>
    </Container>
  );
};
