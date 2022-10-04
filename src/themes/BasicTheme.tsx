import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const theme = createTheme();

export const BasicTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo[200],
      dark: indigo[800],
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
