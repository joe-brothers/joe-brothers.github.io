import { Button, Container, Typography } from "@mui/material";
import { openLinkInNewTab } from "../../../utils";
import { links } from "../../../data";

const apps: string[] = ["Impermanent Loss Calculator", "Joe's Minesweeper"];

export const PrivacyContent = () => {
  window.scroll({ top: 0 });

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <ul>
        {apps.map((appName) => (
          <li key={`privacy_${appName}`} onClick={() => openLinkInNewTab(links.PrivacyPolicy)}>
            <Button variant="text">{appName}</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
