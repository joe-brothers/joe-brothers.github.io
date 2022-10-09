import { Container, Typography } from "@mui/material";

export const Error = ({ emoji, message }: { emoji: string; message: string }) => {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 11, md: 15 }, pb: 15 }}>
      <Typography align="center" variant="h2">
        {emoji}
      </Typography>
      <Typography align="center">{message}</Typography>
    </Container>
  );
};
