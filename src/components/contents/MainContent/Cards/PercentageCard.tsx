import { Paper, Typography } from "@mui/material";
import { basicTheme } from "../../../../themes";

export const PercentageCard = ({ percentage, text }: { percentage: number; text: string }) => {
  return (
    <Paper sx={{ color: "white", px: 3, py: 4, borderRadius: 4, backgroundColor: basicTheme.palette.primary.main, width: "100%" }}>
      <Typography variant="h2">{percentage}%</Typography>
      <Typography mt={1}>{text}</Typography>
    </Paper>
  );
};
