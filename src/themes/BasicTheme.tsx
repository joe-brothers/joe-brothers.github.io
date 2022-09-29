import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

export const BasicTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    }
  },
});