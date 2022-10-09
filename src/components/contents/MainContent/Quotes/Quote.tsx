import { Paper, Typography } from "@mui/material";

export const Quote = ({
  logoSrc,
  quote,
  position,
  company,
}: {
  logoSrc: string;
  quote: string;
  position: string;
  company: string;
}) => {
  return (
    <Paper
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}
      sx={{ p: 3, borderRadius: 4, backgroundColor: "white" }}
    >
      <div>
        <img src={logoSrc} style={{ height: 100 }} />
        <Typography mt={1} fontStyle="italic">
          "{quote}"
        </Typography>
      </div>
      <div>
        <Typography mt={2}>{position}</Typography>
        <Typography fontWeight={500}>{company}</Typography>
      </div>
    </Paper>
  );
};
