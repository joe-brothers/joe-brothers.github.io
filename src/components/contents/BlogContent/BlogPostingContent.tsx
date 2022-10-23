import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { blogPostingData } from "../../../data";
import { BlogPostingData, CategoryEnum, isCategory } from "../../../data/blogPostingData";
import { ErrorContent } from "../ErrorContent";
// import { ReactComponent } from "../../../../public/postings/cpp_1.md";
import { ReactComponent, attributes } from "./test.md";

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
        <Typography ml={5} fontWeight={500} style={{ display: "inline" }}>
          ✨📑 {CategoryEnum[category]} Postings 📚🔥
        </Typography>
      </div>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Title: {posting.title}</Typography>
        <Typography mt={1}>
          Written in: {new Date(posting.createdAt).toLocaleString("en-GB", { timeZone: "UTC" })}
        </Typography>
        <Paper elevation={3} sx={{ px: 3, py: 1, mt: 2 }}>
          <MarkdownStyle>
            <ReactComponent />
          </MarkdownStyle>
        </Paper>
      </section>
    </Container>
  );
};

const MarkdownStyle = styled.div`
  font-size: 1rem;
  font-family: "Roboto";
  p > code {
    background: #d5d9ef;
  }
  pre {
    background-color: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;
  }
  blockquote {
    padding: 1rem;
    border: 1px dashed black;
  }
`;
