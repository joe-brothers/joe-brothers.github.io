import { Button, Container, Typography } from "@mui/material";

const apps: string[] = ["Impermanent Loss Calculator", "Joe's Minesweeper"];

export const PrivacyContent = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <ul>
        {apps.map((appName) => (
          <li
            key={`privacy_${appName}`}
            onClick={() =>
              window.open("https://joe-brothers.com/privacy-policy-impermanent-loss-calculator.html", "_blank")
            }
          >
            <Button variant="text">{appName}</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
