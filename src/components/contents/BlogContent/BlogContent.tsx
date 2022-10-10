import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categoryData = [
  { title: "C++", image: "/assets/logo-cpp.png", link: "cpp" },
  { title: "Java", image: "/assets/logo-java.png", link: "java" },
  { title: "Python", image: "/assets/logo-python.png", link: "python" },
];

export const BlogContent = () => {
  window.scroll({ top: 0 });
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography align="center" variant="h4" mb={{ xs: 5, md: 8 }}>
        Blog
      </Typography>
      <Grid container spacing={{ xs: 3, md: 6 }} mx="auto">
        {categoryData.map(({ title, image, link }) => (
          <Grid key={`blog_${title}`} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, mx: "auto" }}>
              <CardMedia component="img" image={image} alt={title} style={{ maxHeight: 150, objectFit: "contain" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate(link)}>
                  Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
