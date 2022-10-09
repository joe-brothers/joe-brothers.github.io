import { Button, Paper, styled, Typography } from "@mui/material";
import { basicTheme } from "../../../themes";

export const CardWithButton = ({
  textFirst,
  textSecond,
  textButtonFirst,
  textButtonSecond,
}: {
  textFirst: string;
  textSecond: string;
  textButtonFirst: string;
  textButtonSecond: string;
}) => {
  return (
    <Paper
      style={{ display: "flex" }}
      sx={{
        px: 10,
        py: 10,
        borderRadius: 4,
        color: "white",
        backgroundColor: basicTheme.palette.primary.main,
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 5, md: 0 },
      }}
    >
      <div style={{ flex: 1 }}>
        <Typography variant="h3">{textFirst}</Typography>
        <Typography variant="h3">{textSecond}</Typography>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <Button
          variant="contained"
          style={{ borderRadius: 30, backgroundColor: "white", color: basicTheme.palette.primary.dark }}
        >
          {textButtonFirst}
        </Button>
        <Button variant="contained" style={{ borderRadius: 30, border: "2px solid white" }}>
          {textButtonSecond}
        </Button>
      </div>
    </Paper>
  );
};
