import { Routes, Route } from "react-router-dom";
import { LayoutWithTopBarAndFooter } from "./layouts/LayoutWithTopBarAndFooter";
import { Main, Games } from "./components/content";
import { ThemeProvider } from "@mui/material";
import { BasicTheme } from "./themes/BasicTheme";
import "./App.css";

export const App = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Routes>
        <Route path="" element={<LayoutWithTopBarAndFooter />}>
          <Route index element={<Main />} />
          <Route path="games" element={<Games />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
