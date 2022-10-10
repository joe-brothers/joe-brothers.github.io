import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme();

export const basicTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
      light: red[200],
      dark: red[800],
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
