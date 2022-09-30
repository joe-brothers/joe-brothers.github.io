import { Paper, Typography } from "@mui/material";
import { BasicTheme } from "../../../themes/BasicTheme";

export const PercentageCard = ({ percentage, text }: {percentage: number, text: string}) => {
  return (
    <Paper sx={{ color: 'white', px: 3, py: 4, borderRadius: 4, backgroundColor: BasicTheme.palette.primary.main }}>
      <Typography variant="h2">{percentage}%</Typography>
      <Typography mt={1}>{text}</Typography>
    </Paper>
  )
};