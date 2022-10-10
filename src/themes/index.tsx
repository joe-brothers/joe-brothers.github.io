import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme();

export const basicTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[200],
      dark: purple[800],
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
