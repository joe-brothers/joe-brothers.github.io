import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { blogPostingData } from "../../../data";
import { isCategory } from "../../../data/blogPostingData";
import { ErrorContent } from "../ErrorContent";

export const BlogPostingTitles = () => {
  window.scroll({ top: 0 });
  const navigate = useNavigate();
  const { category } = useParams();

  if (!isCategory(category)) {
    return <ErrorContent emoji="🫥" message="This category doesn't exist." />;
  }

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => navigate("/blog")} startIcon={<ArrowBack />}>
          Back
        </Button>
        <Typography style={{ display: "inline" }} ml={5}>
          {category} postings
        </Typography>
      </div>
      <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {blogPostingData[category]
          .sort((a, b) => b.id - a.id)
          .map((data) => (
            <Button onClick={() => navigate(`${data.id}`)}>{data.title}</Button>
          ))}
      </section>
    </Container>
  );
};
