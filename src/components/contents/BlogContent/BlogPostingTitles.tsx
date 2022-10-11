import { ArrowBack } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { blogPostingData } from "../../../data";
import { isCategory } from "../../../data/blogPostingData";
import { ErrorContent } from "../ErrorContent";
import { CategoryEnum } from "../../../data/blogPostingData";

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
        <Typography ml={5} fontWeight={500} style={{ display: "inline" }}>
          ✨📑 {CategoryEnum[category]} Postings 📚🔥
        </Typography>
      </div>
      <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {blogPostingData[category]
          .sort((a, b) => b.id - a.id)
          .map((data) => (
            <article style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Typography>{data.id}</Typography>
              <Button fullWidth onClick={() => navigate(`${data.id}`)} style={{ justifyContent: "left" }}>
                {data.title}
              </Button>
            </article>
          ))}
      </section>
    </Container>
  );
};
