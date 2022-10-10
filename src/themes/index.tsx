import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme();

export const basicTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      light: green[200],
      dark: green[800],
    },
  },
  typography: {
    h3: {
      [theme.breakpoints.down("md")]: {
        fontSize: "2.4rem",
      },
    },
  },
});
