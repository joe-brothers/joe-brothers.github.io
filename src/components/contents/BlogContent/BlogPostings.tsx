import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { blogPostingData } from "../../../data";
import { MarkdownRenderer } from "./MarkdownRenderer";

export const BlogPostings = () => {
  window.scroll({ top: 0 });
  const navigate = useNavigate();
  const { category } = useParams();

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
        {blogPostingData.map((data) => {
          if (data.category === category) {
            return (
              <Paper elevation={3} style={{ padding: 10 }}>
                <Typography variant="h5">{data.title}</Typography>
                <MarkdownRenderer>{data.content}</MarkdownRenderer>
              </Paper>
            );
          }
        })}
      </section>
    </Container>
  );
};
