import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { blogPostingData } from "../../../data";
import { BlogPostingData, isCategory } from "../../../data/blogPostingData";
import { ErrorContent } from "../ErrorContent";
import { MarkdownRenderer } from "./MarkdownRenderer";

export const BlogPostingContent = () => {
  window.scroll({ top: 0 });
  const navigate = useNavigate();
  const { category, id } = useParams();

  if (!isCategory(category)) {
    return <ErrorContent emoji="🫥" message="This category doesn't exist." />;
  }
  const posting = blogPostingData[category].filter((data) => data.id === Number(id))[0];
  if (!posting) {
    return <ErrorContent emoji="🫥" message="This posting doesn't exist." />;
  }

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => navigate(`/blog/${category}`)} startIcon={<ArrowBack />}>
          Back
        </Button>
        <Typography style={{ display: "inline" }} ml={5}>
          {category} postings
        </Typography>
      </div>
      <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Typography variant="h6">{posting.title}</Typography>
        <Typography>Written in: {new Date(posting.createdAt).toLocaleString("en-GB", { timeZone: "UTC" })}</Typography>
        <MarkdownRenderer>{posting.content}</MarkdownRenderer>
      </section>
    </Container>
  );
};
