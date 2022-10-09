import { Button, Container, Typography } from "@mui/material";
import { openLinkInNewTab } from "../../../utils";
import { links } from "../../../data";

const infoLinks: { [key: string]: string }[] = [
  { "GitHub Organization": links.GitHub },
  { "Google Play": links.GooglePlay },
];

export const CompanyContent = () => {
  window.scroll({ top: 0 });

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography align="center" variant="h2">
        About us
      </Typography>
      <ul>
        {infoLinks.map((info) => {
          const [text, link] = Object.entries(info)[0];
          return (
            <li key={`aboutus_${text}`}>
              <Button onClick={() => openLinkInNewTab(link)}>{text}</Button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
